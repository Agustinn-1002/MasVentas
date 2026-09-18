import { siteUrl, mainLogros } from "@/constant/constant";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { route: "", priority: 1 },
    { route: "/Nosotros", priority: 0.7 },
    { route: "/Logros", priority: 0.8 },
    { route: "/Clientes", priority: 0.6 },
  ].map(({ route, priority }) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    priority,
  }));

  const serviceRoutes = mainLogros.map((servicio) => ({
    url: `${siteUrl}/servicios/${servicio.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
