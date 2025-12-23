import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/api';
import { Loader2 } from 'lucide-react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          // Intentamos obtener el usuario. Si el token es inválido,
          // el interceptor de axios (api.js) se encarga del resto.
          const { data } = await api.get('/users/me');
          setUser(data);
        } catch (error) {
          console.error("Error cargando sesión:", error);
          // Si falla, limpiamos tokens basura
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    const { data } = await api.post('/auth/token', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    
    // Cargar datos del usuario inmediatamente
    const userResponse = await api.get('/users/me');
    setUser(userResponse.data);
    
    return true;
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    } finally {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      setUser(null);
      window.location.href = '/login';
    }
  };

  const updateProfileLocal = (updatedData) => {
      setUser(prev => ({ ...prev, ...updatedData }));
  };

  // 👇 PANTALLA DE CARGA ELEGANTE
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse"></div>
            <Loader2 className="w-16 h-16 text-emerald-500 animate-spin relative z-10" />
        </div>
        <h2 className="mt-6 text-xl font-semibold text-white tracking-wide animate-pulse">
          Cargando...
        </h2>
      </div>
    );
  }

  const value = {
    user,
    login,
    logout,
    updateProfileLocal,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};