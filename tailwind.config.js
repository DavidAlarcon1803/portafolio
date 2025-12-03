/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tus colores personalizados
        primary: "#050505",   // Negro profundo
        secondary: "#00ff99", // Verde neón
      },
    },
  },
  plugins: [],
}