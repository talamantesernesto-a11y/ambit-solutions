export const SITE_CONFIG = {
  name: "AMBIT",
  legalName: "Grupo Promotor AMBIT, S.A. de C.V.",
  domain: "ambit.solutions",
  url: "https://ambit.solutions",
  description:
    "Empresa mexicana de construcción e infraestructura con integración vertical completa. Producción de materiales, logística, ingeniería, construcción y supervisión bajo un mismo comando.",
  phone: "+52 55 5616 0991",
  phoneDisplay: "+52 55 5616 0991",
  email: "rarroyo@ambit.solutions",
  address: {
    street: "Av. Insurgentes Sur 2117",
    colony: "San Ángel",
    municipality: "Álvaro Obregón",
    city: "CDMX",
    country: "México",
  },
  social: {
    linkedin: "https://linkedin.com/company/ambit-desarrollos",
  },
  whatsapp: {
    number: "525556160991",
    message: "Hola, me interesa conocer más sobre los servicios de AMBIT.",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const METRICS = [
  { value: "25+", label: "Años construyendo México" },
  { value: "1,436", label: "Viviendas CONAVI 2025" },
  { value: "4", label: "Aeropuertos construidos" },
  { value: "25+", label: "Estados con presencia" },
] as const;

export const SERVICES = [
  {
    title: "Vivienda",
    description:
      "1,436 viviendas en desarrollo para CONAVI en Michoacán, Guanajuato y Nuevo León. Conjuntos habitacionales con materiales propios desde nuestras plantas de producción.",
    icon: "home",
  },
  {
    title: "Infraestructura",
    description:
      "Aeropuertos en Silao, Mérida, Mexicali y Zacatecas. Vialidades y obra civil de alto impacto con capacidad de operación simultánea en múltiples estados.",
    icon: "building",
  },
  {
    title: "Espacios Comunitarios",
    description:
      "Centro Comunitario Piedra Hincada: 13 aulas en 24 días. Escuelas y equipamiento que fortalecen el tejido social donde más se necesita.",
    icon: "users",
  },
  {
    title: "Supervisión de Obra",
    description:
      "Control integral con plataforma digital de georreferenciación y monitoreo en tiempo real. Nadie verifica mejor una obra que quien conoce cada proceso por dentro.",
    icon: "clipboard",
  },
] as const;
