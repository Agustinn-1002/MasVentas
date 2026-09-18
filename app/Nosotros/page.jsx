import Image from "next/image";
import MasVentasLogo from "@/public/MasVentasLogo.png";
import { contactInfo, mainLogros } from "@/constant/constant";
import { Footer } from "@/components/footer/footer";
import { Reveal } from "@/components/Reveal/reveal";

export const metadata = {
  title: "Nosotros",
  description:
    "Conocé a MasVentas, agencia de servicios digitales 360 que ayuda a empresas y emprendedores a vender más en internet.",
  alternates: { canonical: "/Nosotros" },
};

const valores = [
  {
    title: "Resultados por sobre todo",
    text: "Cada acción que tomamos está pensada para generar un impacto medible en las ventas de tu negocio.",
  },
  {
    title: "Trabajo integrado",
    text: "No tercerizamos cada canal por separado: conectamos marketplaces, tienda online, publicidad y contenido bajo una misma estrategia.",
  },
  {
    title: "Cercanía y transparencia",
    text: "Nos integramos al equipo del cliente, entendemos el negocio desde adentro y comunicamos avances de forma clara y constante.",
  },
];

const datos = [
  { id: 1, data: "+90.000", title: "Productos Publicados" },
  { id: 2, data: "+140%", title: "Mejora en Conversión" },
  { id: 3, data: "+150%", title: "Crecimiento Promedio" },
  { id: 4, data: "+5 años", title: "Impulsando Negocios" },
];

export default function Nosotros() {
  return (
    <div>
      <header className="relative overflow-hidden md:mx-4 max-sm:px-4 sm:mx-6 lg:mx-10 bg-linear-20 from-fuchsia-100 via-fuchsia-50 to-white md:rounded-2xl">
        <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-fuchsia-200/50 blur-3xl animate-blob" />
        <Reveal as="div" className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 pb-16 pt-28 text-center md:pt-40 md:pb-20">
          <Image src={MasVentasLogo} alt="MasVentas" width={220} quality={100} className="animate-float-sm" />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Somos el equipo digital detrás del crecimiento de tu negocio
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            En MasVentas ayudamos a empresas y emprendedores a potenciar su presencia digital y aumentar sus
            resultados comerciales, gestionando de forma integral marketplaces, tiendas online, publicidad y
            contenido.
          </p>
        </Reveal>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal className="space-y-5">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Quiénes somos</h2>
            <p className="leading-relaxed text-neutral-700">
              MasVentas es una agencia de servicios digitales 360°. Gestionamos y optimizamos marketplaces como
              Mercado Libre, Frávega y OnCity, desarrollamos tiendas online en plataformas como Tienda Nube,
              WooCommerce y Empretienda, creamos campañas de publicidad digital, administramos redes sociales y
              diseñamos piezas gráficas y sitios web comerciales.
            </p>
            <p className="leading-relaxed text-neutral-700">
              Nuestro enfoque integral permite conectar todos los canales digitales de tu negocio para lograr mayor
              alcance, mejor conversión y crecimiento sostenido, transformando la visibilidad online en más ventas.
            </p>
          </Reveal>

          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            {datos.map((i) => (
              <div key={i.id} className="flex flex-col rounded-2xl bg-neutral-50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <b className="text-2xl text-neutral-900">{i.data}</b>
                <p className="text-base text-neutral-500">{i.title}</p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="mt-20">
          <Reveal as="h2" className="text-2xl font-bold text-neutral-900 sm:text-3xl">Cómo trabajamos</Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {valores.map((v, index) => (
              <Reveal key={v.title} delay={index * 100} className="rounded-2xl border border-black/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <h3 className="font-bold text-neutral-900">{v.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-600">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <Reveal as="h2" className="text-2xl font-bold text-neutral-900 sm:text-3xl">Qué hacemos</Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {mainLogros.map((s, index) => (
              <Reveal key={s.id} delay={index * 80} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg" style={{ background: s.color }}>
                <h3 className="font-bold" style={{ color: s.fontColor }}>{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-700">{s.data}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal as="section" className="mt-20 rounded-2xl bg-neutral-900 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Charlamos sobre tu negocio?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-neutral-300">
            Contanos en qué etapa está tu marca y te contamos cómo podemos ayudarte a vender más.
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
