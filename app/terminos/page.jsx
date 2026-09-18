import { contactInfo } from "@/constant/constant";
import { Footer } from "@/components/footer/footer";

export const metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio de MasVentas - Servicios Digitales 360.",
  alternates: { canonical: "/terminos" },
  robots: { index: false, follow: true },
};

export default function Terminos() {
  return (
    <div>
      <main className="mx-auto w-full max-w-3xl px-4 pb-16 pt-32 sm:px-6 md:pt-44 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Términos y Condiciones
        </h1>
        <p className="mt-2 text-base text-neutral-500">Última actualización: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-neutral-700">
          <p>
            Este texto es una plantilla general y debe ser revisada y completada con los datos legales definitivos
            de la empresa antes de su publicación final.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">1. Objeto</h2>
            <p>
              Estos términos regulan el uso del sitio web de MasVentas - Servicios Digitales 360, a través del cual
              se brinda información sobre nuestros servicios de gestión de marketplaces, desarrollo de tiendas
              online, publicidad digital y diseño gráfico.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">2. Servicios</h2>
            <p>
              La contratación de nuestros servicios se acuerda de forma particular con cada cliente, a través de una
              propuesta comercial específica. La información publicada en este sitio tiene carácter informativo y no
              constituye una oferta vinculante.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">3. Propiedad intelectual</h2>
            <p>
              Los contenidos, textos, imágenes y marcas presentes en este sitio son propiedad de MasVentas o de sus
              clientes, según corresponda, y no pueden reproducirse sin autorización previa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">4. Responsabilidad</h2>
            <p>
              MasVentas no se responsabiliza por interrupciones temporales del sitio ni por el uso que terceros
              hagan de la información aquí publicada.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-900">5. Contacto</h2>
            <p>
              Ante cualquier consulta sobre estos términos, podés escribirnos a {contactInfo.email} o al{" "}
              {contactInfo.phoneDisplay}.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
