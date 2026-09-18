import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mainLogros, contactInfo } from "@/constant/constant";
import { Footer } from "@/components/footer/footer";
import { Reveal } from "@/components/Reveal/reveal";

export function generateStaticParams() {
  return mainLogros.map((servicio) => ({ slug: servicio.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const servicio = mainLogros.find((i) => i.slug === slug);
  if (!servicio) return {};
  return {
    title: servicio.description,
    description: servicio.data,
    alternates: {
      canonical: `/servicios/${servicio.slug}`,
    },
  };
}

export default async function ServicioPage({ params }) {
  const { slug } = await params;
  const servicio = mainLogros.find((i) => i.slug === slug);

  if (!servicio) {
    notFound();
  }

  const otros = mainLogros.filter((i) => i.slug !== servicio.slug);

  return (
    <div>
      <header
        className="relative overflow-hidden md:mx-4 max-sm:px-4 sm:mx-6 lg:mx-10 md:rounded-2xl pt-28 pb-16 md:pt-40 md:pb-20"
        style={{ background: `linear-gradient(180deg, ${servicio.color}, #ffffff)` }}
      >
        <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-white/30 blur-3xl animate-blob" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
          <Reveal className="flex w-full flex-col items-center space-y-5 text-center md:w-1/2 md:items-start md:text-left">
            <h3
              className="inline-flex items-center rounded-2xl bg-white/90 px-4 py-2 text-xl font-black tracking-tight shadow-sm md:text-2xl"
              style={{ color: servicio.fontColor }}
            >
              {servicio.title}
            </h3>
            <h1 className="max-w-xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {servicio.description}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-neutral-700">
              {servicio.longDescription}
            </p>
            <a
              href={`https://wa.me/${contactInfo.phoneWhatsapp}?text=Hola%20quiero%20más%20información%20sobre%20${encodeURIComponent(servicio.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl active:scale-95"
            >
              Hablar por WhatsApp
            </a>
          </Reveal>

          <Reveal delay={150} className="flex w-full justify-center md:w-1/2">
            <Image
              src={servicio.img}
              alt={servicio.title}
              className="h-auto w-full max-w-xs animate-float md:max-w-sm"
              quality={100}
            />
          </Reveal>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold text-neutral-900">Qué incluye</h2>
            <ul className="mt-6 space-y-4">
              {servicio.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: servicio.fontColor }}
                  />
                  <span className="text-neutral-700">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-2xl font-bold text-neutral-900">Áreas de trabajo</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {servicio.items.map((item) => (
                <span
                  key={item}
                  className="rounded-2xl px-4 py-2 text-base font-semibold text-neutral-800 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ background: servicio.color }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-black/5 bg-neutral-50 p-6 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-base font-bold text-neutral-900">¿Querés arrancar?</h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-600">
                Contanos sobre tu negocio y te proponemos un plan de trabajo concreto para {servicio.title.toLowerCase()}.
              </p>
              <a
                href={`https://wa.me/${contactInfo.phoneWhatsapp}?text=Hola%20quiero%20más%20información%20sobre%20${encodeURIComponent(servicio.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-lg active:scale-95"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h2 className="text-2xl font-bold text-neutral-900">Otros servicios</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otros.map((o) => (
              <Link
                key={o.id}
                href={o.url}
                className="rounded-2xl border border-black/5 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ background: o.color }}
              >
                <p className="font-bold" style={{ color: o.fontColor }}>{o.title}</p>
                <p className="mt-1 text-base text-neutral-700">{o.description}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
