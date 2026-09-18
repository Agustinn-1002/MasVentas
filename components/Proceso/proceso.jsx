import { contactInfo } from "@/constant/constant";
import { Reveal } from "@/components/Reveal/reveal";

const pasos = [
  {
    id: 1,
    icon: "💬",
    title: "Nos escribís",
    text: "Nos contás sobre tu negocio y qué necesitás por WhatsApp. Sin formularios largos ni compromiso.",
  },
  {
    id: 2,
    icon: "🔍",
    title: "Diagnóstico gratuito",
    text: "Analizamos tu presencia digital actual y te proponemos un plan concreto, con foco en resultados.",
  },
  {
    id: 3,
    icon: "🚀",
    title: "Arrancamos",
    text: "Nos ponemos a trabajar en los canales que más impacto tengan para tu negocio y vas viendo los avances.",
  },
];

export const Proceso = () => {
  return (
    <section className="py-20 md:py-28" id="proceso">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-neutral-700">
            🤝 Cómo trabajamos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Empezar es más simple de lo que pensás
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600">
            Tres pasos, sin vueltas, para que tu negocio empiece a vender más.
          </p>
        </Reveal>

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent md:block" />

          {pasos.map((p, index) => (
            <Reveal key={p.id} delay={index * 120} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white text-3xl shadow-[0_14px_35px_-20px_rgba(0,0,0,0.4)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-110">
                {p.icon}
                <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                  {p.id}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-neutral-900">{p.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-600">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 flex justify-center">
          <a
            href={`https://wa.me/${contactInfo.phoneWhatsapp}?text=Hola%20quiero%20más%20información`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl active:scale-95"
          >
            Empezar ahora
          </a>
        </Reveal>
      </div>
    </section>
  );
};
