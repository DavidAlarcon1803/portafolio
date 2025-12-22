import { useEffect, useState } from "react";
import api from "@/lib/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, ShieldAlert, UserCheck, UserX } from "lucide-react";

const UsersManager = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const params = search ? { search } : {};
      const response = await api.get("/users/", { params });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchUsers();
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [search]);

  const toggleRole = async (userId, currentRole) => {
    const newRole = currentRole === "admin" ? "user" : "admin";
    try {
      await api.patch(`/users/${userId}/admin-update`, { role: newRole });
      fetchUsers();
    } catch (error) {
      alert("Error: " + (error.response?.data?.detail || "No autorizado"));
    }
  };

  const toggleStatus = async (userId, isActive) => {
    try {
      await api.patch(`/users/${userId}/admin-update`, { is_active: !isActive });
      fetchUsers();
    } catch (error) {
      alert("Error: " + (error.response?.data?.detail || "No autorizado"));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Gestión de Usuarios
            </h1>
            <p className="text-zinc-400">Administra accesos y permisos de la plataforma</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Buscar por nombre o email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30 backdrop-blur">
          <Table>
            <TableHeader className="bg-zinc-900/50">
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="text-zinc-400">Usuario</TableHead>
                <TableHead className="text-zinc-400">Contacto</TableHead>
                <TableHead className="text-zinc-400">Rol</TableHead>
                <TableHead className="text-zinc-400">Estado</TableHead>
                <TableHead className="text-right text-zinc-400">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-zinc-500">
                        Cargando usuarios...
                    </TableCell>
                </TableRow>
              ) : users.map((user) => (
                <TableRow key={user.id} className="border-zinc-800 hover:bg-zinc-900/50">
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-white">{user.full_name || "Sin nombre"}</span>
                      <span className="text-xs text-zinc-500">{user.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-400">
                    {user.phone_number || "-"}
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                      user.role === 'admin' 
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {user.role === 'admin' && <ShieldAlert className="w-3 h-3 mr-1" />}
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell>
                     <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                      user.is_active 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {user.is_active ? 'Activo' : 'Inactivo'}
                    </span>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleRole(user.id, user.role)}
                      className="hover:bg-zinc-800 hover:text-white"
                    >
                      Rol
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleStatus(user.id, user.is_active)}
                      className={`${user.is_active ? 'text-red-400 hover:text-red-300 hover:bg-red-900/20' : 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/20'}`}
                    >
                      {user.is_active ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UsersManager;