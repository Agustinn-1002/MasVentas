import { Poppins } from "next/font/google";
import "./globals.css";
import {NavBar} from '@/components/Navbar/navBar'
import { siteUrl, contactInfo } from '@/constant/constant'

const font = Poppins({
  weight: ['400','500', '600', '700','800'],
  subsets: ["latin"],
});

const title = "MasVentas 360 | Agencia de Servicios Digitales";
const description = "Gestionamos marketplaces, desarrollamos tiendas online y creamos campañas de publicidad digital para que tu negocio venda más. Servicios digitales 360° en Mendoza, Argentina.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | MasVentas 360",
  },
  description,
  keywords: [
    "agencia marketing digital Mendoza",
    "gestión de marketplaces",
    "tiendas online",
    "publicidad digital",
    "Mercado Libre",
    "Tienda Nube",
  ],
  authors: [{ name: "MasVentas 360" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "MasVentas 360",
    title,
    description,
    images: [
      {
        url: "/MasVentasHeader.png",
        width: 1200,
        height: 630,
        alt: "MasVentas - Servicios Digitales 360°",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/MasVentasHeader.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MasVentas 360",
    description,
    url: siteUrl,
    email: contactInfo.email,
    telephone: `+${contactInfo.phoneWhatsapp}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mendoza",
      addressCountry: "AR",
    },
    areaServed: "AR",
    sameAs: [],
  };

  return (
    <html lang="es">
      <body
        className={`${font.className} `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavBar></NavBar>
        <div className="isolate">
          {children}
        </div>
      </body>
    </html>
  );
}
