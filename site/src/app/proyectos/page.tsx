import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/sections/cta";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio de proyectos de AMBIT: vivienda social, infraestructura aeroportuaria, obra civil y equipamiento comunitario en México.",
};

const PROJECTS = [
  {
    title: "Infraestructura Aeroportuaria — Silao",
    category: "Infraestructura",
    description:
      "Proyecto de construcción e infraestructura para el Aeropuerto Internacional de Guanajuato en Silao.",
    status: "Completado",
    image: IMAGES.aeropuertoSilao,
  },
  {
    title: "Infraestructura Aeroportuaria — Mérida",
    category: "Infraestructura",
    description:
      "Obras de infraestructura y equipamiento en el Aeropuerto Internacional de Mérida.",
    status: "Completado",
    image: IMAGES.aeropuertoMerida,
  },
  {
    title: "Infraestructura Aeroportuaria — Mexicali",
    category: "Infraestructura",
    description:
      "Proyecto de construcción para el Aeropuerto Internacional de Mexicali.",
    status: "Completado",
    image: IMAGES.aeropuertoMexicali,
  },
  {
    title: "Infraestructura Aeroportuaria — Zacatecas",
    category: "Infraestructura",
    description:
      "Obras de infraestructura en el Aeropuerto Internacional de Zacatecas.",
    status: "Completado",
    image: IMAGES.aeropuertoZacatecas,
  },
  {
    title: "Desarrollo Habitacional CONAVI 2025",
    category: "Vivienda",
    description:
      "Programa de construcción de vivienda social accesible. Más de 1,436 unidades habitacionales en desarrollo a lo largo del territorio nacional.",
    status: "En desarrollo",
    image: IMAGES.conavi,
  },
  {
    title: "Equipamiento Social y Comunitario",
    category: "Comunitarios",
    description:
      "Construcción de espacios educativos y equipamiento comunitario que fortalecen las comunidades donde operamos.",
    status: "En desarrollo",
    image: IMAGES.equipamiento,
  },
];

export default function ProyectosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary-dark py-28 sm:py-36 overflow-hidden">
        <Image
          src={IMAGES.building}
          alt="Infraestructura AMBIT"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/95 via-secondary-dark/90 to-brand-terracotta/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-sand">
            Portafolio
          </p>
          <h1 className="animate-fade-up delay-100 mt-4 text-[clamp(2.5rem,5vw,4rem)] font-bold text-cream-light max-w-3xl leading-[1.08] hero-heading">
            Lo que hemos construido
            <br />
            <span className="italic font-normal text-brand-sand">habla por nosotros</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-8 text-[17px] text-secondary-200 max-w-xl leading-relaxed">
            Aeropuertos, desarrollos habitacionales y centros comunitarios en
            más de 25 estados de México — y en la memoria de las comunidades
            que los usan cada día.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-terracotta via-primary to-brand-sand" />
      </section>

      {/* Projects Grid */}
      <section className="py-section-sm lg:py-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {PROJECTS.map((project, i) => (
              <article
                key={project.title}
                className={`group bg-white overflow-hidden hover-lift animate-fade-up delay-${((i % 3) + 1) * 100}`}
              >
                {/* Project image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-secondary-200">—</span>
                    <span
                      className={`text-[11px] font-medium uppercase tracking-[0.1em] ${
                        project.status === "Completado"
                          ? "text-brand-sage"
                          : "text-primary"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-bold text-secondary-dark leading-snug group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-secondary-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5 w-0 h-[1.5px] bg-primary transition-all duration-500 group-hover:w-10" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
