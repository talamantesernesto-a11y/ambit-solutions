import type { Metadata } from "next";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { CTA } from "@/components/sections/cta";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios integrales de construcción: vivienda, infraestructura, espacios comunitarios y supervisión de obra. Cadena de valor completa.",
};

const CADENA_DE_VALOR = [
  {
    step: "01",
    title: "Producción de Materiales",
    description:
      "Producción propia que nos permite controlar calidad, tiempos y costos desde el origen.",
  },
  {
    step: "02",
    title: "Logística y Control de Inventarios",
    description:
      "Gestión eficiente de la cadena de suministro con trazabilidad completa.",
  },
  {
    step: "03",
    title: "Ejecución Constructiva",
    description:
      "Procesos estandarizados con equipos especializados y tecnología de monitoreo.",
  },
  {
    step: "04",
    title: "Supervisión y Entrega",
    description:
      "Control integral mediante herramientas digitales de georreferenciación y validación en tiempo real.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary-dark py-28 sm:py-36 overflow-hidden">
        <Image
          src={IMAGES.planning}
          alt="Planeación de construcción"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/90 to-brand-terracotta/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-sand">
            Nuestros Servicios
          </p>
          <h1 className="animate-fade-up delay-100 mt-4 text-[clamp(2.5rem,5vw,4rem)] font-bold text-white max-w-3xl leading-[1.08]">
            Soluciones{" "}
            <span className="italic font-normal text-brand-sand">integrales</span>
            <br />
            de construcción
          </h1>
          <p className="animate-fade-up delay-200 mt-8 text-[17px] text-secondary-200 max-w-xl leading-relaxed">
            AMBIT ofrece servicios integrales enfocados en vivienda,
            infraestructura urbana y espacios educativos. Nuestra capacidad
            operativa nos permite atender proyectos públicos y privados.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-terracotta via-primary to-brand-sand" />
      </section>

      {/* Servicios detalle */}
      <section className="py-section-sm lg:py-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`bg-white p-10 lg:p-14 hover-lift animate-fade-up delay-${(i + 1) * 100}`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[22px] font-bold text-secondary-dark leading-snug">
                  {service.title}
                </h3>
                <div className="mt-4 w-10 h-[1.5px] bg-primary" />
                <p className="mt-6 text-[15px] text-secondary-light leading-[1.8]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadena de Valor */}
      <section className="py-section-sm lg:py-section bg-brand-cream/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-16 lg:mb-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              Cadena de Valor
            </p>
            <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-bold text-secondary-dark leading-[1.1]">
              Control total
              <br />
              <span className="italic font-normal text-brand-stone">del proceso</span>
            </h2>
            <div className="mt-6 w-16 h-[2px] bg-primary" />
            <p className="mt-6 text-[15px] text-secondary-light leading-relaxed">
              AMBIT participa activamente en toda la cadena de valor de la
              vivienda, lo que nos permite mayor control, eficiencia y calidad en
              cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {CADENA_DE_VALOR.map((item, i) => (
              <div key={item.step} className={`relative animate-fade-up delay-${(i + 1) * 100}`}>
                <span className="text-[4rem] font-bold text-primary/10 leading-none font-[family-name:var(--font-playfair)]">
                  {item.step}
                </span>
                <h3 className="mt-1 text-[17px] font-bold text-secondary-dark leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] text-secondary-light leading-relaxed">
                  {item.description}
                </p>
                {i < CADENA_DE_VALOR.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-[1px] bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="py-section-sm lg:py-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                Innovación
              </p>
              <h2 className="mt-4 text-[clamp(2rem,3.5vw,2.5rem)] font-bold text-secondary-dark leading-[1.1]">
                Tecnología y
                <br />
                <span className="italic font-normal text-brand-stone">Control de Obra</span>
              </h2>
              <div className="mt-4 w-12 h-[2px] bg-primary" />
              <p className="mt-6 text-[15px] text-secondary-light leading-[1.8]">
                Contamos con una plataforma digital que permite monitorear el
                avance de obra en tiempo real, validar procesos constructivos,
                geolocalizar proyectos y asegurar trazabilidad. Esta herramienta
                garantiza transparencia, control y toma de decisiones oportunas.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={IMAGES.technology}
                    alt="Plataforma digital de control de obra"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-1/4 h-1/4 border-2 border-primary/15 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
