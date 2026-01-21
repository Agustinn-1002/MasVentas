import { Noto_Sans_SC} from "next/font/google";
import "./globals.css";

const font = Noto_Sans_SC({
  weight: ['400','500', '600', '700','800'],
  subsets: ["latin"],
});


export const metadata = {
  title: "MasVentas - 360",
  description: "MasVentas 360En MasVentas – Servicios Digitales 360 ayudamos a empresas y emprendedores a potenciar su presencia digital y aumentar sus resultados comerciales. Gestionamos y optimizamos marketplaces como Mercado Libre, Frávega y OnCity, desarrollamos tiendas online en plataformas como Tienda Nube, WooCommerce y Empretienda, creamos campañas de publicidad digital, administramos redes sociales y diseñamos piezas gráficas y sitios web comerciales. Nuestro enfoque integral permite conectar todos los canales digitales de tu negocio para lograr mayor alcance, mejor conversión y crecimiento sostenido, transformando la visibilidad online en más ventas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} `}
      >
        {children}
      </body>
    </html>
  );
}
