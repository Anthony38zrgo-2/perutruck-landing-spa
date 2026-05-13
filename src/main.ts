import './style.css'
import Alpine from 'alpinejs'

import { Navbar } from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { Footer } from './components/footer/footer'
import { FloatingButton } from './components/floating-button/floating-button'

import CategoriesHTML from './components/categories/categories.html?raw'
import { categoriesLogic } from './components/categories/categories'

const render = (id: string, content: string) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = content;
}

render('navbar-mount', Navbar());
render('hero-mount', Hero());
render('categories-mount', CategoriesHTML);
render('footer-mount', Footer());
render('floating-btn-mount', FloatingButton());

Alpine.data('categoriesComponent', categoriesLogic);

window.Alpine = Alpine;
Alpine.start();