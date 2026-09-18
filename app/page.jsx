import Image from "next/image";
import MasVentasHeader from "@/public/MasVentasHeader.png";
import { Logros } from "@/components/Logros/logros";
import { Client } from "@/components/Client/client";
import { Proceso } from "@/components/Proceso/proceso";
import { FormUser } from "@/components/form/form";
import { Footer } from "@/components/footer/footer";
import { Reveal } from "@/components/Reveal/reveal";
import { contactInfo } from "@/constant/constant";

export const metadata = {
  description: "Gestionamos marketplaces, desarrollamos tiendas online y creamos campañas de publicidad digital para que tu negocio venda más. Servicios digitales 360° en Mendoza, Argentina.",
  alternates: { canonical: "/" },
};

const heroStats = [
  { id: 1, data: "+90.000", title: "Productos publicados" },
  { id: 2, data: "+150%", title: "Crecimiento promedio" },
  { id: 3, data: "+5 años", title: "Impulsando negocios" },
];

export default function Home() {
  return (
    <div>
      <header className="relative overflow-hidden md:mx-4 max-sm:px-4 sm:mx-6 lg:mx-10 bg-linear-20 from-fuchsia-100 via-fuchsia-50 to-white md:rounded-2xl ">
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-fuchsia-200/60 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-red-200/50 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/40 blur-3xl animate-blob" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 pb-16 pt-28 md:flex-row md:justify-between md:pb-20 md:pt-40">
          <Reveal className="flex w-full flex-col items-center space-y-6 md:w-1/2 md:items-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-red-500 shadow-sm animate-pulse-soft">
              🚀 Servicios Digitales 360°
            </span>

            <div className="flex items-center">
              <h1 className="text-4xl sm:text-5xl leading-tight md:leading-20 tracking-tighter text-center md:text-left">
                <span className="text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400">
                  Impulsamos tu negocio en el mundo digital para lograr
                  <br />
                  <b>MÁS VENTAS</b>
                </span>
              </h1>
            </div>

            <div className="flex items-center px-6 sm:px-10 md:px-0">
              <h3 className="text-center text-base sm:text-lg text-neutral-800 md:text-left">
                Gestionamos y desarrollamos tu presencia digital para que tu marca crezca en todos los canales y logre{" "}
                <span className="font-bold text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400">
                  Resultados
                </span>
              </h3>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <a
                href={`https://wa.me/${contactInfo.phoneWhatsapp}?text=Hola%20quiero%20más%20información`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl active:scale-95"
              >
                Hablar por WhatsApp
              </a>
              <a
                href="#logros"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white/70 px-6 py-3 text-base font-semibold text-neutral-800 transition-all duration-300 hover:scale-105 hover:border-neutral-400 hover:bg-white active:scale-95"
              >
                Ver servicios
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-2 md:justify-start">
              {heroStats.map((s) => (
                <div key={s.id} className="text-center md:text-left">
                  <b className="block text-xl text-neutral-900">{s.data}</b>
                  <p className="text-sm text-neutral-600">{s.title}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="flex w-full justify-center md:w-1/2">
            <Image
              src={MasVentasHeader}
              width={600}
              alt="MasVentas"
              quality={100}
              className="h-auto w-full max-w-[420px] animate-float sm:max-w-[480px] md:max-w-[520px]"
            />
          </Reveal>
        </div>
      </header>

      <main className="mx-auto w-full max-md:-mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Logros/>
      </main>
      <div className="md:mx-4 max-sm:px-4 sm:mx-6 lg:mx-10 bg-linear-90 from-fuchsia-100 via-fuchsia-50 to-white md:rounded-2xl ">
        <Client/>
      </div>
      <Proceso/>
      <FormUser/>
      <Footer/>
    </div>
  );
}
