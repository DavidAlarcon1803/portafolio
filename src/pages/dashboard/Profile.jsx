import { useState, useEffect } from "react";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { User, Lock, Save, Loader2 } from "lucide-react";

const Profile = () => {
  const { user, updateProfileLocal } = useAuth();
  
  // Estados para Info Básica
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [msgInfo, setMsgInfo] = useState(null);

  // Estados para Contraseña
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loadingPass, setLoadingPass] = useState(false);
  const [msgPass, setMsgPass] = useState(null);

  useEffect(() => {
    if (user) {
      setFullName(user.full_name || "");
      setPhoneNumber(user.phone_number || "");
    }
  }, [user]);

  const handleUpdateInfo = async (e) => {
    e.preventDefault();
    setLoadingInfo(true);
    setMsgInfo(null);
    try {
      const { data } = await api.patch("/users/me", {
        full_name: fullName,
        phone_number: phoneNumber,
      });
      updateProfileLocal(data); // Actualizar contexto
      setMsgInfo({ type: 'success', text: 'Perfil actualizado correctamente' });
    } catch (error) {
      setMsgInfo({ type: 'error', text: 'Error al actualizar perfil' });
    } finally {
      setLoadingInfo(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoadingPass(true);
    setMsgPass(null);
    try {
      await api.post("/users/me/change-password", {
        old_password: oldPassword,
        new_password: newPassword,
      });
      setMsgPass({ type: 'success', text: 'Contraseña cambiada. Usa la nueva en tu próxima sesión.' });
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      setMsgPass({ type: 'error', text: error.response?.data?.detail || 'Error al cambiar contraseña' });
    } finally {
      setLoadingPass(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Mi Perfil
            </h1>
            <p className="text-zinc-400">Gestiona tu información personal y seguridad</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* TARJETA 1: Información Personal */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl backdrop-blur">
            <div className="flex items-center gap-2 mb-6 text-emerald-400">
                <User className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Datos Personales</h2>
            </div>
            
            <form onSubmit={handleUpdateInfo} className="space-y-4">
              <div>
                <label className="text-sm text-zinc-400">Email (No editable)</label>
                <input 
                  type="text" 
                  value={user?.email || ''} 
                  disabled 
                  className="w-full mt-1 bg-zinc-950/50 border border-zinc-800 rounded px-3 py-2 text-zinc-500 cursor-not-allowed"
                />
              </div>
              
              <div>
                <label className="text-sm text-zinc-400">Nombre Completo</label>
                <input 
                  type="text" 
                  value={fullName} 
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full mt-1 bg-zinc-900 border border-zinc-700 rounded px-3 py-2 focus:border-emerald-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">Teléfono</label>
                <input 
                  type="text" 
                  value={phoneNumber} 
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full mt-1 bg-zinc-900 border border-zinc-700 rounded px-3 py-2 focus:border-emerald-500 outline-none transition-colors"
                />
              </div>

              {msgInfo && (
                <p className={`text-sm ${msgInfo.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {msgInfo.text}
                </p>
              )}

              <Button disabled={loadingInfo} className="w-full bg-emerald-600 hover:bg-emerald-500">
                {loadingInfo ? <Loader2 className="animate-spin h-4 w-4" /> : <><Save className="w-4 h-4 mr-2" /> Guardar Cambios</>}
              </Button>
            </form>
          </div>

          {/* TARJETA 2: Seguridad */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl backdrop-blur">
             <div className="flex items-center gap-2 mb-6 text-cyan-400">
                <Lock className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Seguridad</h2>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="text-sm text-zinc-400">Contraseña Actual</label>
                <input 
                  type="password" 
                  value={oldPassword} 
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full mt-1 bg-zinc-900 border border-zinc-700 rounded px-3 py-2 focus:border-cyan-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">Nueva Contraseña</label>
                <input 
                  type="password" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full mt-1 bg-zinc-900 border border-zinc-700 rounded px-3 py-2 focus:border-cyan-500 outline-none transition-colors"
                />
              </div>

              {msgPass && (
                <p className={`text-sm ${msgPass.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {msgPass.text}
                </p>
              )}

              <Button disabled={loadingPass} variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800">
                {loadingPass ? <Loader2 className="animate-spin h-4 w-4" /> : 'Actualizar Contraseña'}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;