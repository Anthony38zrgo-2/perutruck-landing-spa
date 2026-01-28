import { defineConfig } from 'vite'

export default defineConfig({
  // IMPORTANTE:
  // Reemplaza 'perutruck-landing-spa' con el nombre EXACTO de tu repositorio en GitHub.
  // Si tu repo se llama diferente, cámbialo aquí.
  base: '/perutruck-landing-spa/',
  
  build: {
    // Esto asegura que la carpeta de salida se llame 'dist' (estándar en Vite)
    outDir: 'dist',
  }
})