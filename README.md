# Portafolio Profesional & Sistema de Gestión (React + Vite)

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web moderna desarrollada con **React** y **Vite**, diseñada con un doble propósito:
1.  Presentar una marca personal sólida a través de un **Portafolio Interactivo** con diseño de alto impacto.
2.  Demostrar capacidades técnicas avanzadas mediante un **Panel Administrativo (Dashboard)** funcional conectado a una API Backend.

La aplicación destaca por su diseño "Dark Neon", animaciones fluidas y una arquitectura limpia orientada a componentes, integrando consumo de APIs RESTful y seguridad basada en tokens.

## 🚀 Objetivo

El objetivo principal es exhibir la versatilidad del perfil **Full Stack**, mostrando no solo habilidades de maquetación y diseño UI/UX, sino también la capacidad de implementar lógica de negocio compleja, autenticación y gestión de estado en el cliente conectada a servicios reales.

## ✨ Características Principales

### 🌐 Módulo Público (Portafolio)
* **Diseño Responsivo & Moderno:** Estética oscura con acentos en verde neón (#00ff99), efectos de *glassmorphism* (backdrop-blur) y degradados.
* **Secciones Informativas:**
    * **Hero:** Presentación con efectos visuales y descarga de CV/Contacto.
    * **Tecnologías:** Visualización de stack técnico (Frontend, Backend, Herramientas) con niveles de dominio.
    * **Experiencia:** Línea de tiempo (Timeline) interactiva detallando trayectoria laboral.
    * **Servicios & Proyectos:** Tarjetas con efectos hover y enlaces a demos.
* **Navegación:** Barra de navegación *sticky* con enlaces sociales y funcionalidad de "Copiar Correo" al portapapeles.

### 🔐 Módulo Privado (Dashboard de Administración)
* **Autenticación Segura:**
    * Sistema de Login conectado a API Backend (compatible con OAuth2 Password Flow).
    * Manejo de errores y estados de carga (Loading spinners).
    * Almacenamiento seguro de Token de acceso.
* **Gestión de Usuarios (UsersManager):**
    * Tabla interactiva para visualizar usuarios registrados en el sistema.
    * **Control de Roles:** Funcionalidad para promover/degradar usuarios (Admin <-> User) en tiempo real.
    * **Sistema de Baneo:** Capacidad para desactivar/banear usuarios directamente desde la interfaz.
    * Indicadores visuales de estado (Activo/Inactivo, Admin/User).

## 🛠️ Stack Tecnológico

**Frontend:**
* ![React](https://img.shields.io/badge/React-18-blue?logo=react) **React.js**: Librería principal de UI.
* ![Vite](https://img.shields.io/badge/Vite-Build-purple?logo=vite) **Vite**: Entorno de desarrollo y empaquetador ultrarrápido.
* ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css) **Tailwind CSS**: Framework de estilos utilitarios.
* **React Router DOM**: Manejo de rutas y navegación SPA.
* **Lucide React**: Librería de iconos vectoriales ligeros.

**Integración Backend (Simulada/Conectada):**
* **Fetch API**: Consumo de endpoints REST (`/auth/token`, `/users`).
* **JWT**: Manejo de sesiones mediante JSON Web Tokens.

## 📂 Estructura del Proyecto

```bash
src/
├── assets/             # Recursos estáticos (imágenes, svgs)
├── components/         # Componentes reutilizables
│   ├── ui/             # Componentes base (Botones, Tablas)
│   ├── Navbar.jsx      # Navegación principal
│   ├── ExperienceTimeline.jsx
│   ├── ProjectsSection.jsx
│   └── ...
├── lib/                # Utilidades (cn, helpers de clases)
├── pages/              # Páginas / Vistas
│   ├── dashboard/      # Vistas privadas
│   │   └── UsersManager.jsx
│   ├── Home.jsx        # Landing Page
│   └── Login.jsx       # Vista de Autenticación
├── styles/             # Archivos CSS modulares y globales
│   ├── Navbar.css
│   ├── Profile.css
│   └── Sections.css
├── App.jsx             # Configuración de Rutas
└── main.jsx            # Punto de entrada
