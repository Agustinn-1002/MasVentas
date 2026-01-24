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
        url: '/Logros',
        label: 'Logros'
    },
    {
        id: 3,
        url: '/Nosotros',
        label: 'Nosotros'
    },
    {
        id: 4,
        url: '/Clientes',
        label: 'Nuestros Clientes'
    },
]

export const mainLogros = [
    {
        id: 1,
        color:'#ff868677',
        fontColor: '#cb1d1d',
        position:'left',
        ubication: 'start',
        title:'MAS Alcance',
        description:'Llegamos a más personas en los canales donde hoy se toman decisiones de compra.',
        data:'Gestionamos y optimizamos tu presencia en marketplaces, redes sociales y plataformas digitales para que tus productos y servicios tengan mayor visibilidad y lleguen al público correcto.',
        img: redes
    },
    {
        id: 2,
        color:'#a1ff7a77',
        fontColor: '#4cb81f',
        position:'right',
        ubication: 'end',
        title:'MAS Presencia',
        description:'Construimos una imagen digital profesional, clara y coherente en todos tus canales.',
        data:'Diseñamos y mantenemos una presencia sólida a través de redes sociales, piezas gráficas, banners, contenido web y tiendas online alineadas a tu marca.',
        img: diseñador
    },
    {
        id: 3,
        color:'#fffa7777',
        fontColor: '#e4dc1b',
        position:'left',
        ubication: 'start',
        title:'MAS Conversión',
        description:'Transformamos visitas, clics y visualizaciones en clientes reales.',
        data:'Creamos estrategias y estructuras digitales pensadas para vender: publicaciones optimizadas, tiendas online funcionales y campañas orientadas a resultados.',
        img: webService
    },
    {
        id: 4,
        color:'#8793ff77',
        fontColor: '#1625ad',
        position:'right',
        ubication: 'end',
        title:'MAS Crecimiento',
        description: 'Impulsamos el crecimiento sostenido de tu negocio con soluciones digitales integrales.',
        data:'Conectamos estrategia, tecnología, diseño y gestión para que tu empresa escale de forma ordenada y rentable.',
        img: ecommers
    }
]