// categories.ts
// categories.ts
import type { Category } from './types';
import { CATEGORIES_DATA } from './categories.data';
import Alpine from 'alpinejs';

export const categoriesLogic = () => {
    return {
        modalOpen: false,
        selectedCat: {} as Category,
        categories: CATEGORIES_DATA, // Los datos se inyectan aquí

        openModal(cat: Category) {
            this.selectedCat = cat;
            this.modalOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeModal() {
            this.modalOpen = false;
            document.body.style.overflow = '';
        }
    };
};

Alpine.data('categoriesComponent', categoriesLogic);