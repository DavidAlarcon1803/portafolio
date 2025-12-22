import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, Code2, LogOut, User, LayoutDashboard } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-emerald-400" />
            <span className="font-bold text-xl tracking-tighter text-white">David Alarcón</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium text-zinc-300">Inicio</Link>
              <a href="#projects" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium text-zinc-300">Proyectos</a>
              <a href="#about" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium text-zinc-300">Sobre Mí</a>
              
              {user ? (
                <>
                  <Link to="/dashboard" className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 rounded-md text-sm transition-colors">
                     <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </Link>
                  <Link to="/profile" className="flex items-center gap-1 hover:text-emerald-400 text-zinc-300 px-3 py-2 rounded-md text-sm transition-colors">
                     <User className="w-4 h-4" /> {user.full_name || "Perfil"}
                  </Link>
                  <button onClick={handleLogout} className="flex items-center gap-1 text-red-400 hover:text-red-300 px-3 py-2 rounded-md text-sm transition-colors">
                    <LogOut className="w-4 h-4" /> Salir
                  </button>
                </>
              ) : (
                <Link to="/login" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            <a href="#projects" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Proyectos</a>
            {user ? (
               <>
                 <Link to="/dashboard" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
                 <Link to="/profile" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mi Perfil</Link>
                 <button onClick={handleLogout} className="text-red-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Cerrar Sesión</button>
               </>
            ) : (
               <Link to="/login" className="text-emerald-400 hover:text-emerald-300 block px-3 py-2 rounded-md text-base font-medium">Iniciar Sesión</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;