import { mainLogros, contactInfo } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal/reveal";

const badges = [
  "📦 +90.000 productos gestionados",
  "💻 Tiendas listas para vender",
  "🎯 Campañas que convierten",
  "🎨 Diseño que enamora",
];

export const Logros = ({ showIntro = true }) => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" id="logros">
      {/* fondo decorativo */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-red-100/50 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-fuchsia-100/50 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      {showIntro && (
        <Reveal className="relative mx-auto mb-14 max-w-2xl px-4 text-center md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-neutral-700">
            🧩 Nuestros servicios
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            4 pilares para hacer crecer tu negocio
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600">
            Cada uno suma resultados por separado. Juntos, potencian tu marca en todos los canales.
          </p>
        </Reveal>
      )}

      {/* linea conectora */}
      <div className="pointer-events-none absolute left-1/2 top-40 hidden h-[calc(100%-10rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neutral-300 to-transparent md:block" />

      <div className="relative space-y-16 md:space-y-20">
        {mainLogros.map((i, index) => {
          const isRight = i.position === "right";

          return (
            <Reveal
              key={i.id}
              delay={index * 80}
              className={[
                "relative mx-auto w-full max-w-7xl flex flex-col-reverse md:block md:min-h-[420px] md:pb-[220px]",
                index === 0 ? "mt-0" : "-mt-8",
              ].join(" ")}
            >
              {/* Card */}
              <div
                className={[
                  "relative z-10 -mt-28 transition-transform duration-500",
                  "w-full md:w-[70%]",
                  "rounded-2xl px-6 py-5 md:px-9 md:py-6",
                  "shadow-[0_22px_70px_-45px_rgba(0,0,0,0.45)]",
                  "backdrop-blur-sm",
                  "hover:-translate-y-1.5",
                  isRight
                    ? "md:ml-auto md:mt-0 md:text-right"
                    : "md:mr-auto md:mt-0 md:text-left",
                ].join(" ")}
                style={{ background: i.color }}
              >
                {/* Badge flotante, fuera y arriba de la tarjeta */}
                <span
                  className={[
                    "pointer-events-none absolute bottom-full z-20 mb-3 hidden w-max items-center rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.4)] md:inline-flex",
                    isRight ? "right-0" : "left-0",
                  ].join(" ")}
                >
                  {badges[index]}
                </span>

                {/* highlight superior sutil */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-white/20" />

                <div className="relative">
                  {/* Título tipo chip */}
                  <div className={isRight ? "flex justify-end max-sm:justify-center" : "flex justify-start max-sm:justify-center"}>
                    <h3
                      className="inline-flex items-center rounded-2xl bg-white/90 px-4 py-2 text-2xl font-black tracking-tight md:text-3xl shadow-[0_14px_35px_-28px_rgba(0,0,0,0.55)]"
                      style={{ color: i.fontColor }}
                    >
                      {i.title}
                    </h3>
                  </div>

                  {/* Separador editorial */}
                  <div className={isRight ? "mt-4 flex justify-end" : "mt-4 flex justify-start "}>
                    <div className="h-px w-24 bg-black/10 " />
                  </div>

                  <p className={"mt-3 font-bold leading-5 text-neutral-800/90 max-sm:text-center"}>
                    {i.description}
                  </p>

                  <p className={"mt-2 text-base leading-6 text-neutral-700/80 max-sm:text-center"}>
                    {i.data}
                  </p>


                  {/* CTA */}
                  <div className={["mt-6 space-y-3 flex md:flex-row flex-col md:justify-between", isRight ? " max-sm:justify-center md:flex-row-reverse" : "max-sm:justify-center"].join(" ")}>
                    <div className="md:flex md:space-x-2 text-base max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-2 max-sm:gap-x-10 text-center self-center">
                      {i.items.map(e => (
                        <div key={e} className="py-1 bg-white text-neutral-800 px-3 rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md" >
                          {e}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={i.url}
                      className="inline-flex items-center rounded-lg bg-white/80 px-3 py-1.5 text-base font-semibold text-neutral-900 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md"
                    >
                      Ver detalles
                    </Link>

                  </div>
                </div>
              </div>

              {/* Imagen */}
              <div
                className={[
                  "relative flex justify-center",
                  "md:pointer-events-none md:absolute md:bottom-0",
                  isRight ? "md:left-20" : "md:right-10",
                  index === 0 ? "md:translate-y-0" : "md:-translate-y-16",
                ].join(" ")}
              >
                <div className="relative animate-float-sm" style={{ animationDelay: `${index * 0.4}s` }}>
                  <Image
                    src={i.img}
                    alt={i.title}
                    className="h-auto w-full max-w-sm [-webkit-mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 420px, 90vw"
                  />
                </div>
              </div>

            </Reveal>
          );
        })}
      </div>

      <Reveal className="relative mx-auto mt-16 flex max-w-3xl flex-col items-center gap-4 px-4 text-center md:mt-14">
        <span className="text-2xl">👋</span>
        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
          ¿Cuál de estos 4 pilares le falta a tu negocio?
        </h3>
        <p className="max-w-xl text-base leading-relaxed text-neutral-600">
          Empezá hoy y sumá el que más impacto tenga en tus ventas. Te asesoramos sin costo ni compromiso.
        </p>
        <a
          href={`https://wa.me/${contactInfo.phoneWhatsapp}?text=Hola%20quiero%20más%20información`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl active:scale-95"
        >
          Quiero potenciar mi negocio
        </a>
      </Reveal>
    </section>
  )
}
