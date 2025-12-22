import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/api';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar usuario al iniciar la aplicación si hay token
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const { data } = await api.get('/users/me');
          setUser(data);
        } catch (error) {
          console.error("Error cargando sesión:", error);
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    // FastAPI OAuth2 espera x-www-form-urlencoded
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    const { data } = await api.post('/auth/token', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    
    // Obtener datos del usuario inmediatamente
    const userResponse = await api.get('/users/me');
    setUser(userResponse.data);
    
    return true;
  };

  const logout = async () => {
    try {
      // Importante para Single Session: Avisar al backend que invalide
      await api.post('/auth/logout');
    } catch (error) {
      console.error("Error al cerrar sesión en servidor:", error);
    } finally {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      setUser(null);
      // Redirigir si es necesario se hace en el componente
    }
  };

  const updateProfileLocal = (updatedData) => {
      setUser(prev => ({ ...prev, ...updatedData }));
  };

  const value = {
    user,
    login,
    logout,
    updateProfileLocal,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};