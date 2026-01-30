import redes from '@/public/redes.png'
import diseñador from '@/public/diseñador.png'
import webService from '@/public/webService.png'
import ecommers from '@/public/ecommers.png'

export const navLinks = [
    {
        id: 1,
        url: '#',
        label: 'Inicio'
    },
    {
        id: 2,
        url: '#logros',
        label: 'Logros'
    },
    {
        id: 3,
        url: '#contacto',
        label: 'Contacto'
    },
    {
        id: 4,
        url: '#clientes',
        label: 'Nuestros Clientes'
    },
]

export const mainLogros = [
    {
        id: 1,
        color: '#ff868677',
        fontColor: '#cb1d1d',
        position: 'left',
        ubication: 'start',
        title: 'MAS Alcance',
        description: 'Gestión de plataformas de venta online',
        data: 'Administramos y optimizamos tus productos en plataformas de ecommerce para aumentar visibilidad, orden y oportunidades reales de venta.',
        items: [
            "Marketplaces",
            "Tiendas",
            "Productos",
            "Optimización"
        ],
        img: redes,
        url: '/servicios/gestion-plataformas'
    },
    {
        id: 2,
        color: '#a1ff7a77',
        fontColor: '#4cb81f',
        position: 'right',
        ubication: 'end',
        title: 'MAS Presencia',
        description: 'Desarrollo de tiendas online profesionales',
        data: 'Desarrollamos tiendas web funcionales y escalables, preparadas para vender y representar correctamente a tu marca.',
        items: [
            "Diseño",
            "Desarrollo",
            "Pagos",
            "Mobile"
        ],
        img: diseñador,
        url: "/servicios/tiendas-online"

    },
    {
        id: 3,
        color: '#fffa7777',
        fontColor: '#e4dc1b',
        position: 'left',
        ubication: 'start',
        title: 'MAS Conversión',
        description: 'Gestión de publicidad digital',
        data: 'Planificamos y administramos campañas publicitarias enfocadas en generar tráfico calificado y ventas.',
        items: [
            "Anuncios",
            "Segmentación",
            "Campañas",
            "Resultados"
        ],
        img: webService,
        url: "/servicios/publicidad-digital"
    },
    {
        id: 4,
        color: '#8793ff77',
        fontColor: '#1625ad',
        position: 'right',
        ubication: 'end',
        title: 'MAS Impacto',
        description: 'Diseño gráfico y contenido digital',
        data: "Creamos piezas visuales claras y profesionales para comunicar tu marca en todos los canales digitales.",
        items: [
            "Banners",
            "Redes",
            "Publicaciones",
            "Creatividad"
        ], 
        img: ecommers,
        url: "/servicios/diseno-digital"
    }
]