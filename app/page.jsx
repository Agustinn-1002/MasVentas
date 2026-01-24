import Image from "next/image";
import MasVentasHeader from "@/public/MasVentasHeader.png";
import { mainLogros } from "@/constant/constant";

export default function Home() {
  return (
    <div>
      <header className="md:mx-4 max-sm:px-4 sm:mx-6 lg:mx-10 bg-linear-20 from-fuchsia-100 via-fuchsia-50 to-white md:rounded-2xl ">
        <div className="flex flex-col md:flex-row justify-center items-center pb-16 pt-28 md:pt-40 md:pb-20">
          <div className="flex flex-col justify-center items-center space-y-5 md:pr-10">
            <div className="flex items-center lg:w-[700px]">
              <h1 className="text-4xl sm:text-5xl leading-tight md:leading-20 tracking-tighter text-center">
                <span className="text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400">
                  Impulsamos tu negocio en el mundo digital para lograr
                  <br />
                  <b>MÁS VENTAS</b>
                </span>
              </h1>
            </div>

            <div className="flex items-center md:w-7/12 px-6 sm:px-10 md:px-0">
              <h3 className="text-center text-base sm:text-lg text-neutral-800">
                Gestionamos y desarrollamos tu presencia digital para que tu marca crezca en todos los canales y logre{" "}
                <span className="font-bold text-transparent bg-clip-text bg-linear-180 from-red-400 to-neutral-400">
                   Resultados
                </span>
              </h3>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:pl-6">
            <Image src={MasVentasHeader} width={600} alt="MasVentas" quality={100} />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="py-40">
          <div className="space-y-28">
            {mainLogros.map((i) => {
              const isRight = i.position === "right";

              return (
                <div
                  key={i.id}
                  className="relative mx-auto grid w-full max-w-7xl items-center md:min-h-[420px] md:pb-[220px]"
                >
                  {/* Card */}
                  <div
                    className={[
                      "relative -my-6 z-10 overflow-hidden",
                      "w-full md:w-[70%]",
                      "rounded-2xl px-6 py-5 md:px-9 md:py-6", // ⬅ menos padding vertical
                      "shadow-[0_22px_70px_-45px_rgba(0,0,0,0.45)]",
                      "backdrop-blur-sm",
                      isRight
                        ? "md:ml-auto md:text-right"
                        : "md:mr-auto md:text-left",
                    ].join(" ")}
                    style={{ background: i.color }}
                  >


                    {/* highlight superior sutil */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-white/20" />

                    {/* glows suaves para look premium */}
                    <div className="pointer-events-none absolute -right-14 -top-14 size-56 rounded-full bg-white/25 blur-3xl" />
                    <div className="pointer-events-none absolute -left-14 -bottom-14 size-56 rounded-full bg-black/5 blur-3xl" />

                    <div className="relative">
                      {/* Título tipo chip */}
                      <div className={isRight ? "flex justify-end" : "flex justify-start"}>
                        <h3
                          className="inline-flex items-center rounded-2xl bg-white/90 px-4 py-2 text-2xl font-black tracking-tight md:text-3xl shadow-[0_14px_35px_-28px_rgba(0,0,0,0.55)]"
                          style={{ color: i.fontColor }}
                        >
                          {i.title}
                        </h3>
                      </div>

                      {/* Separador editorial */}
                      <div className={isRight ? "mt-4 flex justify-end" : "mt-4 flex justify-start"}>
                        <div className="h-px w-24 bg-black/10" />
                      </div>

                      <b className="mt-3 text-[14.5px] leading-5 text-neutral-800/90">
                        {i.description}
                      </b>

                      <p className="mt-2 text-sm leading-5 text-neutral-700/80">
                        {i.data}
                      </p>


                      {/* CTA discreto (opcional) */}
                      <div className={isRight ? "mt-6 flex justify-end" : "mt-6 flex justify-start"}>
                        <button className="inline-flex items-center rounded-lg bg-white/80 px-3 py-1.5 text-sm font-semibold text-neutral-900 hover:bg-white">
                          Ver detalles
                        </button>

                      </div>
                    </div>
                  </div>

                  {/* Imagen */}
                  <div
                    className={[
                      "mt-8 md:mt-0 pointer-events-none",
                      "md:absolute md:bottom-0",
                      // pegado hacia la card:
                      isRight ? "md:left-20 " : "md:right-10",
                      // un toque más “sobre el torso”
                      "md:-translate-y-30",
                    ].join(" ")}
                  >
                    <Image
                      src={i.img}
                      alt={i.title}
                      className="h-auto w-full max-w-sm [-webkit-mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]"
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 420px, 90vw"
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
