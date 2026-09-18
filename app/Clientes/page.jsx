import Image from "next/image";
import clubDigital from "@/public/Clientes/clubDigital.png";
import infoandina from "@/public/Clientes/infoandina.png";
import ivory from "@/public/Clientes/Ivory.png";
import puntoInsumos from "@/public/Clientes/puntoInsumos.png";
import { contactInfo } from "@/constant/constant";
import { Footer } from "@/components/footer/footer";
import { Reveal } from "@/components/Reveal/reveal";

export const metadata = {
  title: "Nuestros Clientes",
  description: "Empresas que ya confían en MasVentas para gestionar su presencia digital y vender más.",
  alternates: { canonical: "/Clientes" },
};

const clientes = [
  {
    id: 1,
    src: clubDigital,
    nombre: "Club Digital",
    detalle: "Gestión de marketplaces y tienda online.",
  },
  {
    id: 2,
    src: infoandina,
    nombre: "Info Andina",
    detalle: "Importador mayorista IT: catálogo, publicidad y presencia online.",
  },
  {
    id: 3,
    src: ivory,
    nombre: "Ivory Studio",
    detalle: "Desarrollo de tienda online y diseño de marca.",
  },
  {
    id: 4,
    src: puntoInsumos,
    nombre: "Punto Insumos",
    detalle: "Gestión de plataformas de venta y publicidad digital.",
  },
];

const datos = [
  { id: 1, data: "+90.000", title: "Productos Publicados" },
  { id: 2, data: "+140%", title: "Mejora en Conversión" },
  { id: 3, data: "+150%", title: "Crecimiento Promedio" },
  { id: 4, data: "+5 años", title: "Impulsando Negocios" },
];

export default function Clientes() {
  return (
    <div>
      <header className="relative overflow-hidden md:mx-4 max-sm:px-4 sm:mx-6 lg:mx-10 bg-linear-20 from-fuchsia-100 via-fuchsia-50 to-white md:rounded-2xl">
        <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-fuchsia-200/50 blur-3xl animate-blob" />
        <Reveal as="div" className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 pb-10 pt-28 text-center md:pt-40 md:pb-16">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Ellos ya eligieron crecer con nosotros
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            Nos integramos al equipo, entendemos el negocio desde adentro y gestionamos cada canal con una visión
            clara de crecimiento.
          </p>
        </Reveal>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {datos.map((i, index) => (
            <Reveal key={i.id} delay={index * 80} className="flex flex-col rounded-2xl bg-neutral-50 px-5 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <b className="text-2xl text-neutral-900">{i.data}</b>
              <p className="text-base text-neutral-500">{i.title}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {clientes.map((c, index) => (
            <Reveal key={c.id} delay={index * 100} className="flex items-center gap-5 rounded-2xl border border-black/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <Image src={c.src} alt={c.nombre} width={100} quality={100} className="transition-transform duration-300 hover:scale-110" />
              <div>
                <h3 className="font-bold text-neutral-900">{c.nombre}</h3>
                <p className="mt-1 text-base leading-relaxed text-neutral-600">{c.detalle}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 rounded-2xl bg-neutral-900 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Tu marca es la próxima?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-neutral-300">
            Contanos sobre tu negocio y armemos juntos una estrategia digital enfocada en resultados.
          </p>
          <a
            href={`https://wa.me/${contactInfo.phoneWhatsapp}?text=Hola%20quiero%20más%20información`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl active:scale-95"
          >
            Hablar por WhatsApp
          </a>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
