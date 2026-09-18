import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/MasVentasLogo.png";
import { contactInfo } from "@/constant/constant";

export const Footer = () => {
    return (
    <footer className="mt-20 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {/* Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* logo */}
              <Image src={Logo} alt="MasVentas" className="h-9 w-auto" priority />
              
            </div>

            <p className="max-w-sm text-base leading-relaxed text-neutral-600">
              Impulsamos tu negocio con estrategias digitales enfocadas en resultados
              Visibilidad Presencia Conversión y Crecimiento
            </p>
          </div>

          {/* Navegación */}
          <div className="grid gap-8 sm:grid-cols-2 md:gap-10">
            <div className="space-y-3">
              <h4 className="text-base font-bold text-neutral-900">Secciones</h4>
              <nav className="flex flex-col gap-2 text-base text-neutral-600">
                <Link className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-neutral-900" href="/">Inicio</Link>
                <Link className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-neutral-900" href="/Logros">Logros</Link>
                <Link className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-neutral-900" href="/Nosotros">Nosotros</Link>
                <Link className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-neutral-900" href="/Clientes">Nuestros clientes</Link>
              </nav>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-bold text-neutral-900">Contacto</h4>
              <div className="flex flex-col gap-2 text-base text-neutral-600">
                <a className="w-fit transition-colors duration-300 hover:text-neutral-900" href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
                <a className="w-fit transition-colors duration-300 hover:text-neutral-900" href={`tel:+${contactInfo.phoneWhatsapp}`}>
                  {contactInfo.phoneDisplay}
                </a>
                <span className="text-neutral-500">{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Micro-CTA / confianza */}
          <div className="space-y-4 md:justify-self-end md:text-right">
            <h4 className="text-base font-bold text-neutral-900">¿Listo para crecer?</h4>
            <p className="max-w-80 text-base leading-relaxed text-neutral-600 md:ml-auto">
              Escribinos y te respondemos con una propuesta clara según tu negocio y objetivos
            </p>

            <div className="flex flex-wrap gap-2 md:justify-end">
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-base font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                Estrategia
              </span>
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-base font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                Diseño
              </span>
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-base font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                Performance
              </span>
            </div>
            <a
              href={`https://wa.me/${contactInfo.phoneWhatsapp}?text=Hola%20quiero%20más%20información`}
              target="_blank"
              rel="noopener noreferrer"
              className="my-4 inline-flex w-fit items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-lg active:scale-95"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-black/5 py-6 text-base text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MasVentas Todos los derechos reservados</p>

          <div className="flex flex-wrap gap-4">
            <Link className="transition-colors duration-300 hover:text-neutral-800" href="/privacidad">Privacidad</Link>
            <Link className="transition-colors duration-300 hover:text-neutral-800" href="/terminos">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}