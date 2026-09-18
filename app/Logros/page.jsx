import { Logros as LogrosSection } from "@/components/Logros/logros";
import { Footer } from "@/components/footer/footer";
import { Reveal } from "@/components/Reveal/reveal";

export const metadata = {
  title: "Nuestros Servicios",
  description:
    "Conocé los servicios de MasVentas: gestión de marketplaces, tiendas online, publicidad digital y diseño gráfico.",
  alternates: { canonical: "/Logros" },
};

export default function Logros() {
  return (
    <div>
      <header className="relative overflow-hidden md:mx-4 max-sm:px-4 sm:mx-6 lg:mx-10 bg-linear-20 from-fuchsia-100 via-fuchsia-50 to-white md:rounded-2xl">
        <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-fuchsia-200/50 blur-3xl animate-blob" />
        <Reveal as="div" className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 pb-10 pt-28 text-center md:pt-40 md:pb-16">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Todo lo que hacemos para que vendas más
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            Cuatro frentes de trabajo conectados entre sí: alcance, presencia, conversión e impacto. Elegí uno para
            ver el detalle.
          </p>
        </Reveal>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <LogrosSection showIntro={false} />
      </main>

      <Footer />
    </div>
  );
}
