import Image from "next/image"
import clubDigital from '@/public/Clientes/clubDigital.png'
import infoandina from '@/public/Clientes/infoandina.png'
import ivory from '@/public/Clientes/Ivory.png'
import puntoInsumos from '@/public/Clientes/puntoInsumos.png'

const images = [
    {
        id: 1,
        src: clubDigital
    },
    {
        id: 2,
        src: infoandina
    },
    {
        id: 3,
        src: ivory
    },
    {
        id: 4,
        src: puntoInsumos
    }
]
const datos = [
    {
        id: 1,
        title: 'Productos Publicados',
        data: '+90.000'
    },
    {
        id: 2,
        title: 'Mejora en Conversión',
        data: '+140%'
    },
    {
        id: 3,
        title: 'Crecimiento Promedio',
        data: '+150%'
    },
    {
        id: 4,
        title: 'Impulsando Negocios',
        data: '+5 años'
    }
]
export const Client = () => {


    return (
        <main className="" id="clientes">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-x-20 py-10 px-2 md:py-20 max-sm:text-center">
                <div className="md:w-[500px] flex flex-col space-y-5 md:space-y-10">
                    <h2 className="text-3xl">Ellos ya eligieron crecer, y tú marca espera lo mismo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            datos.map(i => (
                                <div key={i.id} className="bg-white flex justify-center flex-col py-3 md:px-5 md:w-5/6 rounded-2xl">
                                    <b className="inline text-xl">{i.data}</b>
                                    <p className="inline text-sm text-neutral-500">{i.title}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-5 md:gap-10 items-center">
                    {images.map(i => (
                        <div key={i.id} className="">
                            <Image src={i.src} alt="" width={150} quality={100} className="opacity-50" />
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className="md:w-[1000px] text-center mx-auto pb-20 max-sm:hidden">
                <h3 className="text-lg font-semibold text-neutral-900">
                    Trabajamos junto a empresas que deciden dar el siguiente paso digital.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Nos integramos al equipo, entendemos el negocio desde adentro y gestionamos cada canal con una visión clara de crecimiento.
                    No somos solo proveedores. Somos socios estratégicos enfocados en generar resultados reales.
                </p>
            </div>
        </main>
    )
}