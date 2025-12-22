import axios from 'axios';

// Ajusta esto si tu backend está en otro puerto o URL en producción
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. INTERCEPTOR DE SOLICITUDES: Pone el token en la cabecera
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 2. INTERCEPTOR DE RESPUESTAS: Maneja el error 401 (Token vencido)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Si recibimos un 401 y no es un reintento...
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        
        if (!refreshToken) {
            throw new Error('No refresh token available');
        }

        // Intentar obtener nuevos tokens
        const { data } = await axios.post(`${API_URL}/auth/refresh`, {
          refresh_token: refreshToken,
        });

        // Guardar nuevos tokens
        localStorage.setItem('access_token', data.access_token);
        if (data.refresh_token) {
            localStorage.setItem('refresh_token', data.refresh_token);
        }

        // Actualizar la cabecera de la petición original y reintentar
        originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`;
        return api(originalRequest);

      } catch (refreshError) {
        // Si falla el refresh (token expirado, sesión cerrada remotamente, etc.)
        console.error("Sesión caducada:", refreshError);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        // Opcional: Redirigir al login usando window.location
        if (window.location.pathname !== '/login') {
            window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
