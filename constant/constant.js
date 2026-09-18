import redes from '@/public/redes.png'
import diseñador from '@/public/diseñador.png'
import webService from '@/public/webService.png'
import ecommers from '@/public/ecommers.png'

export const navLinks = [
    {
        id: 1,
        url: '/',
        label: 'Inicio'
    },
    {
        id: 2,
        url: '/#logros',
        label: 'Logros'
    },
    {
        id: 3,
        url: '/#contacto',
        label: 'Contacto'
    },
    {
        id: 4,
        url: '/#clientes',
        label: 'Nuestros Clientes'
    },
]

export const mainLogros = [
    {
        id: 1,
        slug: 'gestion-plataformas',
        color: '#ff868677',
        fontColor: '#cb1d1d',
        position: 'left',
        ubication: 'start',
        title: 'MAS Alcance',
        description: 'Gestión de plataformas de venta online',
        data: 'Administramos y optimizamos tus productos en plataformas de ecommerce para aumentar visibilidad, orden y oportunidades reales de venta.',
        longDescription: 'Nos encargamos de la gestión integral de tus canales de venta online: publicamos, ordenamos y optimizamos tu catálogo en los marketplaces y plataformas donde tus clientes ya están comprando, para que cada producto tenga la mejor oportunidad de venderse.',
        benefits: [
            'Publicación y carga de catálogo en marketplaces como Mercado Libre, Frávega y OnCity',
            'Optimización de títulos, descripciones e imágenes para mejorar el posicionamiento',
            'Gestión de stock, precios y estado de publicaciones',
            'Seguimiento de métricas y ajustes constantes para mejorar la conversión'
        ],
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
        slug: 'tiendas-online',
        color: '#a1ff7a77',
        fontColor: '#4cb81f',
        position: 'right',
        ubication: 'end',
        title: 'MAS Presencia',
        description: 'Desarrollo de tiendas online profesionales',
        data: 'Desarrollamos tiendas web funcionales y escalables, preparadas para vender y representar correctamente a tu marca.',
        longDescription: 'Diseñamos y desarrollamos tiendas online a medida, pensadas para representar tu marca y facilitar la compra en cualquier dispositivo. Trabajamos con plataformas como Tienda Nube, WooCommerce y Empretienda, adaptando cada proyecto a las necesidades del negocio.',
        benefits: [
            'Diseño de tienda a medida, con identidad de marca propia',
            'Integración de medios de pago y métodos de envío',
            'Optimización para dispositivos móviles',
            'Configuración de catálogo, categorías y checkout'
        ],
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
        slug: 'publicidad-digital',
        color: '#fffa7777',
        fontColor: '#e4dc1b',
        position: 'left',
        ubication: 'start',
        title: 'MAS Conversión',
        description: 'Gestión de publicidad digital',
        data: 'Planificamos y administramos campañas publicitarias enfocadas en generar tráfico calificado y ventas.',
        longDescription: 'Planificamos, creamos y administramos campañas de publicidad digital en Meta Ads, Google Ads y otras plataformas, con foco en atraer tráfico calificado y convertirlo en ventas reales.',
        benefits: [
            'Definición de audiencias y segmentación estratégica',
            'Creación y optimización continua de campañas',
            'Seguimiento de métricas de inversión y retorno (ROAS)',
            'Reportes periódicos con resultados y próximos pasos'
        ],
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
        slug: 'diseno-digital',
        color: '#8793ff77',
        fontColor: '#1625ad',
        position: 'right',
        ubication: 'end',
        title: 'MAS Impacto',
        description: 'Diseño gráfico y contenido digital',
        data: "Creamos piezas visuales claras y profesionales para comunicar tu marca en todos los canales digitales.",
        longDescription: 'Creamos piezas gráficas y contenido audiovisual pensado para comunicar tu marca de forma clara y profesional en cada canal digital: redes sociales, publicidad, tienda online y más.',
        benefits: [
            'Diseño de piezas para redes sociales y campañas',
            'Banners y material gráfico para tiendas y marketplaces',
            'Línea gráfica coherente con la identidad de marca',
            'Contenido pensado para mejorar el impacto visual y la conversión'
        ],
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

export const contactInfo = {
    phoneDisplay: '+54 9 261 472-5894',
    phoneWhatsapp: '5492614725894',
    email: 'agenciamasventas360@gmail.com',
    location: 'Mendoza, Argentina'
}

// TODO: reemplazar por el dominio real apenas esté definido (se usa para el sitemap, robots.txt y las etiquetas Open Graph)
export const siteUrl = 'https://www.masventas360.com.ar'