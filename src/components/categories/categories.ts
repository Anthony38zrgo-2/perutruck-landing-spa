import html from './categories.html?raw';

// 1. Definimos una interfaz para asegurar el tipado (Clean Code)
interface Category {
    title: string;
    subtitle: string;
    img: string;
    cta: string;
    description: string;
}

// 2. Separamos los datos estáticos (Data Source)
const CATEGORIES_DATA: Category[] = [
    { 
        title: 'ARRANCADOR DE MOTOR', 
        subtitle: 'Potencia de ignición', 
        img: '/arrancador.png', 
        cta: 'Más información',
        description: 'Dispositivo electromecánico de alto rendimiento diseñado para convertir la energía eléctrica en fuerza mecánica de rotación. Esencial para iniciar el ciclo de combustión en motores diésel de carga pesada, garantizando un arranque fiable incluso en condiciones climáticas extremas.'
    },
    { 
        title: 'ALTERNADOR DE MOTOR', 
        subtitle: 'Energía constante', 
        img: '/alternador.png', 
        cta: 'Más información',
        description: 'Generador de corriente trifásica con rectificación incorporada. Transforma la energía mecánica del motor en eléctrica para recargar la batería y alimentar los sistemas electrónicos del camión durante la marcha. Fabricado para soportar altas demandas de amperaje.'
    },
    { 
        title: 'PLATO DE EMBRAGUE', 
        subtitle: 'Transmisión precisa', 
        img: '/plato.png', 
        cta: 'Más información',
        description: 'Componente de presión crítica que actúa como interfase entre el motor y la caja de cambios. Su diafragma de acero tratado térmicamente asegura una presión uniforme sobre el disco, permitiendo cambios de marcha suaves y evitando el patinamiento bajo carga.'
    },
    { 
        title: 'DISCO DE EMBRAGUE', 
        subtitle: 'Fricción duradera', 
        img: '/disco.png', 
        cta: 'Más información',
        description: 'Elemento de fricción compuesto por materiales cerámicos o de fibra reforzada. Diseñado para absorber las vibraciones torsionales del motor y transmitir el torque a la transmisión con máxima eficiencia y resistencia al desgaste por temperatura.'
    }
];

// 3. Definimos la lógica del componente Alpine
// Esto retorna el objeto que Alpine usará en x-data
const categoriesLogic = () => {
    return {
        modalOpen: false,
        selectedCat: {} as Category, // Inicialización tipada
        categories: CATEGORIES_DATA,

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

// 4. Exponemos la lógica al objeto window para que Alpine pueda encontrarla
// Usamos (window as any) para evitar errores de TS rápidos, o podrías extender la interfaz Window
(window as any).categoriesComponent = categoriesLogic;

export const Categories = () => {
    return html;
}