import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Loader2, Shield, Trash2, UserCog, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function UsersManager() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // ID del usuario que se está modificando
  const [error, setError] = useState(null);

  // URL del Backend
  const API_URL = import.meta.env.VITE_API_URL;

  // --- 1. Cargar Usuarios ---
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_URL}/users/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error("No se pudieron cargar los usuarios");

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // --- 2. Cambiar Rol (User <-> Admin) ---
  const handleRoleChange = async (userId, currentRole) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    setActionLoading(userId);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/users/${userId}/role`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ role: newRole })
      });

      if (!response.ok) throw new Error("Error al cambiar rol");

      // Actualizar estado localmente para que se vea rápido
      setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));

    } catch (err) {
      alert("No se pudo cambiar el rol: " + err.message);
    } finally {
      setActionLoading(null);
    }
  };

  // --- 3. Banear / Desactivar Usuario ---
  const handleBanUser = async (userId) => {
    if (!confirm("¿Estás seguro de desactivar a este usuario?")) return;
    
    setActionLoading(userId);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error("Error al desactivar usuario");

      // Actualizar estado localmente
      setUsers(users.map(u => u.id === userId ? { ...u, is_active: false } : u));

    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* HEADER DE LA SECCIÓN */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Gestión de Usuarios</h1>
          <p className="text-gray-400 text-sm mt-1">Administra accesos y roles de la plataforma.</p>
        </div>
        
        {/* Badge de conteo */}
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-primary font-mono text-sm font-bold">
            {users.length} Activos
          </span>
        </div>
      </div>

      {/* MANEJO DE ERRORES */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-200">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      {/* TABLA DE DATOS */}
      <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-2xl">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-white/10">
              <TableHead className="w-[80px] text-primary/80">ID</TableHead>
              <TableHead className="text-primary/80">Usuario</TableHead>
              <TableHead className="text-primary/80">Rol</TableHead>
              <TableHead className="text-primary/80">Estado</TableHead>
              <TableHead className="text-right text-primary/80">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {loading ? (
               <TableRow>
                 <TableCell colSpan={5} className="h-32 text-center text-gray-500">
                   <div className="flex flex-col items-center gap-2">
                     <Loader2 className="animate-spin text-primary" size={32} />
                     <span className="text-xs uppercase tracking-widest">Cargando datos...</span>
                   </div>
                 </TableCell>
               </TableRow>
            ) : users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-gray-500">
                  No hay usuarios registrados.
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id} className="group border-white/5 hover:bg-white/5 transition-colors">
                  
                  {/* ID */}
                  <TableCell className="font-mono text-xs text-gray-500">#{user.id}</TableCell>
                  
                  {/* EMAIL */}
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-300">
                        {user.email.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-white font-medium text-sm">{user.email}</span>
                    </div>
                  </TableCell>
                  
                  {/* ROL */}
                  <TableCell>
                    {user.role === 'admin' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold uppercase tracking-wide">
                        <Shield size={12} /> Admin
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wide">
                        Usuario
                      </span>
                    )}
                  </TableCell>
                  
                  {/* ESTADO */}
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {user.is_active ? (
                        <>
                          <CheckCircle size={14} className="text-primary" />
                          <span className="text-gray-300 text-sm">Activo</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={14} className="text-red-500" />
                          <span className="text-red-400 text-sm">Inactivo</span>
                        </>
                      )}
                    </div>
                  </TableCell>
                  
                  {/* ACCIONES */}
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      
                      {/* Botón Cambiar Rol */}
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 border-white/10 hover:bg-primary/20 hover:text-primary hover:border-primary/50"
                        title={user.role === 'admin' ? "Degradar a Usuario" : "Ascender a Admin"}
                        onClick={() => handleRoleChange(user.id, user.role)}
                        disabled={actionLoading === user.id}
                      >
                        {actionLoading === user.id ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <UserCog size={14} />
                        )}
                      </Button>

                      {/* Botón Banear (Solo si está activo) */}
                      {user.is_active && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-gray-500 hover:text-red-400 hover:bg-red-500/10"
                          title="Desactivar Usuario"
                          onClick={() => handleBanUser(user.id)}
                          disabled={actionLoading === user.id}
                        >
                          <Trash2 size={14} />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}