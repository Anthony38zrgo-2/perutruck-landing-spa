import type { Category } from './types';

export const CATEGORIES_DATA: Category[] = [
    { 
        title: 'MOTOR Y COMPONENTES', 
        subtitle: 'El corazón de tu camión', 
        img: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`, 
        cta: 'Ver repuestos',
        description: 'Soluciones integrales para el tren motriz. Incluye culatas, kits de anillos, pistones, turbos y bombas de aceite. Diseñados para maximizar la eficiencia de combustible.'
    },
    { 
        title: 'SENSORES Y ELECTRÓNICA', 
        subtitle: 'Precisión y Control', 
        img: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M9.375 9L15 14.625M9.375 14.625L15 9m-12 5.625v-11.25c0-.621.504-1.125 1.125-1.125h16.5c.621 0 1.125.504 1.125 1.125v11.25m-18.75 0h18.75m-18.75 0v6c0 .621.504 1.125 1.125 1.125h16.5c.621 0 1.125-.504 1.125-1.125v-6" /></svg>`, 
        cta: 'Ver sensores',
        description: 'Componentes de gestión electrónica avanzada. Desde sensores de presión y temperatura hasta módulos ECU, alternadores y arrancadores de alto rendimiento.'
    },
    { 
        title: 'TRANSMISIÓN Y EMBRAGUE', 
        subtitle: 'Transferencia de Potencia', 
        img: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`, 
        cta: 'Ver transmisión',
        description: 'Componentes especializados para la transmisión de torque. Ofrecemos kits de embrague, platos opresores, collarines y repuestos de caja de cambios.'
    },
    { 
        title: 'SUSPENSIÓN Y DIRECCIÓN', 
        subtitle: 'Estabilidad en Ruta', 
        img: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" /></svg>`, 
        cta: 'Ver suspensión',
        description: 'Sistemas reforzados para el control del vehículo. Incluye amortiguadores, muelles, barras estabilizadoras y terminales de dirección.'
    },
    { 
        title: 'VÁLVULAS Y SISTEMAS', 
        subtitle: 'Control de Fluidos', 
        img: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v13.5m0 0l-3.375-3.375M12 16.5l3.375-3.375M6.75 19.5h10.5" /></svg>`, 
        cta: 'Ver válvulas',
        description: 'Válvulas de admisión, escape y componentes de control de aire de alta precisión fabricadas con aleaciones resistentes al calor extremo.'
    },
    { 
        title: 'FILTROS DE ALTO FLUJO', 
        subtitle: 'Protección Garantizada', 
        img: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.75 9.75 0 009.75-9.75V5.25L12 3 2.25 5.25v6A9.75 9.75 0 0012 21z" /></svg>`, 
        cta: 'Ver filtros',
        description: 'Máxima protección contra impurezas con tecnología de microfiltración que previene el desgaste prematuro de los componentes internos.'
    },
    { 
        title: 'SISTEMAS DE FRENADO', 
        subtitle: 'Seguridad Total', 
        img: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.033A9.75 9.75 0 0012 21.75a9.75 9.75 0 000-19.033zM12 16.5h.008v.008H12v-.008z" /></svg>`, 
        cta: 'Ver frenos',
        description: 'Componentes de seguridad crítica: Forros de freno de alta fricción, pulmones de aire, tambores y zapatas de gran potencia.'
    },
    { 
        title: 'ACCESORIOS Y CARROCERÍA', 
        subtitle: 'Equipamiento Externo', 
        img: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18h16.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5H3.75A1.5 1.5 0 012.25 19.5V4.5A1.5 1.5 0 013.75 3z" /></svg>`, 
        cta: 'Ver accesorios',
        description: 'Mantenimiento estético y funcional. Espejos, faros, manijas y componentes estructurales de carrocería originales.'
    }
];