import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/MasVentasLogo.png";

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

            <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
              Impulsamos tu negocio con estrategias digitales enfocadas en resultados
              Visibilidad Presencia Conversión y Crecimiento
            </p>
          </div>

          {/* Navegación */}
          <div className="grid gap-8 sm:grid-cols-2 md:gap-10">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-neutral-900">Secciones</h4>
              <nav className="flex flex-col gap-2 text-sm text-neutral-600">
                <Link className="w-fit hover:text-neutral-900" href="/">Inicio</Link>
                <Link className="w-fit hover:text-neutral-900" href="/Logros">Logros</Link>
                <Link className="w-fit hover:text-neutral-900" href="/Nosotros">Nosotros</Link>
                <Link className="w-fit hover:text-neutral-900" href="/Clientes">Nuestros clientes</Link>
              </nav>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-neutral-900">Contacto</h4>
              <div className="flex flex-col gap-2 text-sm text-neutral-600">
                <a className="w-fit hover:text-neutral-900" href="mailto:contacto@masventas.com">
                  contacto@masventas.com
                </a>
                <a className="w-fit hover:text-neutral-900" href="tel:+549261XXXXXXXX">
                  +54 9 261 XXXXXXXX
                </a>
                <span className="text-neutral-500">Mendoza Argentina</span>
              </div>
            </div>
          </div>

          {/* Micro-CTA / confianza */}
          <div className="space-y-4 md:justify-self-end md:text-right">
            <h4 className="text-sm font-bold text-neutral-900">¿Listo para crecer?</h4>
            <p className="max-w-80 text-sm leading-relaxed text-neutral-600 md:ml-auto">
              Escribinos y te respondemos con una propuesta clara según tu negocio y objetivos
            </p>

            <div className="flex flex-wrap gap-2 md:justify-end">
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
                Estrategia
              </span>
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
                Diseño
              </span>
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
                Performance
              </span>
            </div>
            <a
              href="https://wa.me/549261XXXXXXXX?text=Hola%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="my-4 inline-flex w-fit items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-black/5 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MasVentas Todos los derechos reservados</p>

          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-neutral-800" href="/privacidad">Privacidad</Link>
            <Link className="hover:text-neutral-800" href="/terminos">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}