/// <reference types="vite/client" />

// 1. Permite importar archivos HTML como texto crudo
declare module '*.html?raw' {
  const content: string;
  export default content;
}

// 2. Extiende la interfaz Window para que acepte la variable Alpine
import type { Alpine } from 'alpinejs';

declare global {
  interface Window {
    Alpine: Alpine;
  }
}