import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
// 1. IMPORTAMOS EL COMPONENTE DE USUARIOS
import UsersManager from "./pages/dashboard/UsersManager";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-primary text-white relative overflow-hidden font-sans">

          {/* Fondos Globales */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none" />

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Rutas Protegidas */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UsersManager />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;