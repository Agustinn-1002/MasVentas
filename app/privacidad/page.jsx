import { contactInfo } from "@/constant/constant";
import { Footer } from "@/components/footer/footer";

export const metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de MasVentas - Servicios Digitales 360.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

export default function Privacidad() {
  return (
    <div>
      <main className="mx-auto w-full max-w-3xl px-4 pb-16 pt-32 sm:px-6 md:pt-44 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mt-2 text-base text-neutral-500">Última actualización: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-neutral-700">
          <p>
            Este texto es una plantilla general y debe ser revisada y completada con los datos legales definitivos
            de la empresa antes de su publicación final.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">1. Información que recopilamos</h2>
            <p>
              Cuando te contactás con nosotros a través de este sitio (por ejemplo, mediante WhatsApp o email),
              podemos recibir datos como tu nombre, número de teléfono, correo electrónico y la información que
              decidas compartir sobre tu negocio o consulta.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">2. Uso de la información</h2>
            <p>
              Utilizamos tus datos únicamente para responder tu consulta, brindarte información sobre nuestros
              servicios y, si lo autorizás, mantenerte al tanto de novedades. No vendemos ni compartimos tu
              información con terceros ajenos a la prestación de nuestros servicios.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">3. Cookies y tecnologías similares</h2>
            <p>
              Este sitio puede utilizar cookies o tecnologías equivalentes con el fin de mejorar la experiencia de
              navegación y analizar el uso del sitio de forma agregada.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">4. Tus derechos</h2>
            <p>
              Podés solicitar en cualquier momento el acceso, la corrección o la eliminación de tus datos
              personales escribiéndonos a {contactInfo.email}.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">5. Contacto</h2>
            <p>
              Ante cualquier duda sobre esta política de privacidad, podés escribirnos a {contactInfo.email} o al{" "}
              {contactInfo.phoneDisplay}.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
