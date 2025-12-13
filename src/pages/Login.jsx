import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Sections.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // 1. Crear datos de formulario (OAuth2 standard)
      const formData = new URLSearchParams();
      formData.append('username', email); // FastAPI espera 'username', aunque sea el email
      formData.append('password', password);

      // 2. Hacer la petición fetch real
      const response = await fetch(`${API_URL}/auth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Error al iniciar sesión");
      }

      // 3. Éxito: Guardar el token
      // Guardamos el token en localStorage para usarlo en otras peticiones
      localStorage.setItem('token', data.access_token);
      
      // 4. Redirigir al usuario (por ejemplo, al Home o a un Dashboard)
      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setError("Credenciales incorrectas o error de conexión.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Bienvenido</h1>
          <p className="text-gray-400">Accede al panel de administración</p>
        </div>

        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 backdrop-blur-xl p-8 shadow-[0_0_50px_-12px_rgba(0,255,153,0.1)] hover:border-secondary/30 transition-all duration-500">
          
          {/* Muestra mensaje de error si existe */}
          {error && (
            <div className="mb-4 p-3 rounded bg-red-500/20 border border-red-500/50 text-red-200 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ejemplo.com"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all duration-300"
                required
              />
            </div>            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg bg-secondary text-black font-bold hover:bg-[#00cc7a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Conectando...
                </>
              ) : (
                "Ingresar al Sistema"
              )}
            </button>
          </form>
           <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-gray-500">o continuar con</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
           {/* Back to Home Link */}
           <div className="text-center mt-8">
            <Link to="/" className="text-gray-500 hover:text-secondary text-sm transition-colors flex items-center justify-center gap-2">
              ← Volver al portafolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
