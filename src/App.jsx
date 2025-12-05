import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importamos el Router
import Navbar from "./components/Navbar";
import Home from "./pages/Home";   // Importamos la nueva página Home
import Login from "./pages/Login"; // Importamos la nueva página Login

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary text-white relative overflow-hidden font-sans">
        
        {/* --- FONDOS GLOBALES --- */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* --- NAVBAR FIJO (Se mantiene en todas las páginas) --- */}
        <Navbar />

        {/* --- CONTENIDO CAMBIANTE --- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;