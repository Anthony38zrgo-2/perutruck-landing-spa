import './style.css'
import Alpine from 'alpinejs'

// Importaciones existentes
import { Navbar } from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { Categories } from './components/categories/categories'

// NUEVAS Importaciones
import { Footer } from './components/footer/footer'
import { FloatingButton } from './components/floating-button/floating-button'

// Función helper (la misma de antes)
const render = (id: string, content: string) => {
    const el = document.getElementById(id);
    if(el) el.innerHTML = content;
}

// Renderizado de componentes
render('navbar-mount', Navbar());
render('hero-mount', Hero());
render('categories-mount', Categories());

// NUEVOS Renderizados
render('footer-mount', Footer());
render('floating-btn-mount', FloatingButton());

// Iniciar Alpine (Siempre al final)
window.Alpine = Alpine
Alpine.start()