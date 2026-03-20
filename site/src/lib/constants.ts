export const SITE_CONFIG = {
  name: "AMBIT",
  legalName: "Grupo Promotor AMBIT, S.A. de C.V.",
  domain: "ambit.solutions",
  url: "https://ambit.solutions",
  description:
    "Empresa mexicana de ingeniería y construcción. Más de una década construyendo proyectos industriales, infraestructura y vivienda social con calidad, innovación y compromiso.",
  phone: "+52 55 5616 0991",
  phoneDisplay: "+52 55 5616 0991",
  email: "central@ambit.solutions",
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
  { value: "10+", label: "Años de experiencia" },
  { value: "1,436", label: "Viviendas en desarrollo" },
  { value: "4", label: "Aeropuertos construidos" },
  { value: "15+", label: "Estados con presencia" },
] as const;

export const SERVICES = [
  {
    title: "Vivienda",
    description:
      "Construcción de vivienda accesible, social y habitacional. Conjuntos y desarrollos a escala media, urbanos y periurbanos.",
    icon: "home",
  },
  {
    title: "Infraestructura",
    description:
      "Infraestructura urbana y equipamiento público. Proyectos aeroportuarios, vialidades y obra civil de alto impacto.",
    icon: "building",
  },
  {
    title: "Espacios Comunitarios",
    description:
      "Espacios educativos y comunitarios que fortalecen el tejido social. Escuelas, centros de salud y equipamiento urbano.",
    icon: "users",
  },
  {
    title: "Supervisión de Obra",
    description:
      "Supervisión, control y gestión integral de obra con plataforma digital de monitoreo en tiempo real.",
    icon: "clipboard",
  },
] as const;
