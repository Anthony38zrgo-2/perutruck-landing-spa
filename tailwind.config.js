/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Escanea archivos JS y TS dentro de src
  ],
  theme: {
    extend: {
      // Aquí puedes personalizar tus colores, fuentes, etc.
    },
  },
  plugins: [],
}