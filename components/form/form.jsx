import Image from "next/image";
import masventas from "@/public/masventas.png";

export const FormUser = () => {
  return (
    <section className="py-20" id="contacto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              ¿Querés saber cómo podemos ayudar a tu negocio?
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-neutral-700">
              Hablemos unos minutos y te contamos qué podemos hacer para mejorar tu
              presencia digital, atraer más clientes y vender más. Sin vueltas y sin compromiso.
            </p>

            <a
              href="https://wa.me/549261-------?text=Hola%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-green-600"
            >
              Hablar por WhatsApp
            </a>
          </div>

          {/* Imagen */}
          <div className="relative">
            <Image
              src={masventas}
              alt="Contacto"
              className=""
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
