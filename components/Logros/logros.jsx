import { mainLogros } from "@/constant/constant";
import Image from "next/image";

export const Logros = () => {
    return (
        <section className="py-40" id="logros">
          <div className="space-y-28">
            {mainLogros.map((i) => {
              const isRight = i.position === "right";

              return (
                <div
                  key={i.id}
                  className="relative -mt-20 mx-auto w-full max-w-7xl flex flex-col-reverse md:block md:min-h-[420px] md:pb-[220px]"
                >
                  {/* Card */}
                  <div
                    className={[
                      "relative z-10 -mt-28",
                      "w-full md:w-[70%]",
                      "rounded-2xl px-6 py-5 md:px-9 md:py-6",
                      "shadow-[0_22px_70px_-45px_rgba(0,0,0,0.45)]",
                      "backdrop-blur-sm",
                      isRight
                        ? "md:ml-auto md:mt-0 md:text-right"
                        : "md:mr-auto md:mt-0 md:text-left",
                    ].join(" ")}
                    style={{ background: i.color }}
                  >
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

                      <p className={"mt-2 text-sm leading-5 text-neutral-700/80 max-sm:text-center"}>
                        {i.data}
                      </p>


                      {/* CTA discreto (opcional) 
                      <div className={isRight ? "mt-6 flex justify-end max-sm:justify-center" : "mt-6 flex justify-start max-sm:justify-center"}>
                        <button className="inline-flex items-center rounded-lg bg-white/80 px-3 py-1.5 text-sm font-semibold text-neutral-900 hover:bg-white">
                          Ver detalles
                        </button>

                      </div>
                      */}
                    </div>
                  </div>

                  {/* Imagen */}
                  <div
                    className={[
                      "relative z-0 flex justify-center",
                      "md:pointer-events-none md:absolute md:bottom-0 md:z-10",
                      isRight ? "md:left-20" : "md:right-10",
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
    )
}