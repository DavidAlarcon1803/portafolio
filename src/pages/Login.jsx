// src/pages/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Usamos react-router en lugar de next/link
import '../styles/Sections.css'; // Para asegurar que tengamos las variables de colores

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simular envío de datos
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      setPassword("");
      alert("Simulación de login exitosa");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
      
      {/* Fondo decorativo exclusivo del Login */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Bienvenido</h1>
          <p className="text-gray-400">Accede al panel de administración</p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 backdrop-blur-xl p-8 shadow-[0_0_50px_-12px_rgba(0,255,153,0.1)] hover:border-secondary/30 transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@davidalarcon.com"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all duration-300"
                required
              />
            </div>

            {/* Password Input */}
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-white/5 text-secondary focus:ring-secondary accent-secondary" />
                <span className="text-gray-400 group-hover:text-secondary transition-colors">Recuérdame</span>
              </label>
              <a href="#" className="text-secondary hover:text-green-400 transition-colors font-medium">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg bg-secondary text-black font-bold hover:bg-[#00cc7a] hover:shadow-[0_0_20px_rgba(0,255,153,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Iniciando...
                </>
              ) : (
                "Ingresar al Sistema"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-gray-500">o continuar con</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-secondary hover:border-secondary/30 transition-all duration-300">
              Google
            </button>
            <button className="py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-secondary hover:border-secondary/30 transition-all duration-300">
              GitHub
            </button>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-8">
          <Link to="/" className="text-gray-500 hover:text-secondary text-sm transition-colors flex items-center justify-center gap-2">
            ← Volver al portafolio
          </Link>
        </div>
      </div>
    </div>
  );
}