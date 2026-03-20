import type { Metadata } from "next";
import Image from "next/image";
import { METRICS } from "@/lib/constants";
import { CTA } from "@/components/sections/cta";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a AMBIT: integración vertical completa, plantas propias de producción en Querétaro y Saltillo, y +25 años construyendo México.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary-dark py-28 sm:py-36 overflow-hidden">
        <Image
          src={IMAGES.aboutTeam}
          alt="Equipo AMBIT"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/95 via-secondary-dark/90 to-brand-terracotta/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-sand">
            Sobre Nosotros
          </p>
          <h1 className="animate-fade-up delay-100 mt-4 text-[clamp(2.5rem,5vw,4rem)] font-bold text-cream-light max-w-3xl leading-[1.08] hero-heading">
            De una idea a una cadena de valor
            <br />
            <span className="italic font-normal text-brand-sand">que construye México</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-8 text-[17px] text-secondary-200 max-w-xl leading-relaxed">
            Plantas propias de producción. Integración vertical completa.
            +25 años entregando en tiempo y en presupuesto.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-terracotta via-primary to-brand-sand" />
      </section>

      {/* Misión y Visión */}
      <section className="py-section-sm lg:py-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="animate-slide-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                01
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-secondary-dark leading-[1.1]">
                Misión
              </h2>
              <div className="mt-4 w-12 h-[2px] bg-primary" />
              <p className="mt-6 text-[15px] text-secondary-light leading-[1.8]">
                AMBIT construye viviendas, escuelas, aeropuertos e
                infraestructura con materiales propios producidos en nuestras
                plantas de Querétaro y Saltillo. Controlamos cada eslabón de la
                cadena para que cada comunidad tenga acceso a entornos seguros,
                dignos y sostenibles.
              </p>
            </div>
            <div className="animate-slide-right">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                02
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-secondary-dark leading-[1.1]">
                Visión
              </h2>
              <div className="mt-4 w-12 h-[2px] bg-primary" />
              <p className="mt-6 text-[15px] text-secondary-light leading-[1.8]">
                Ser la constructora mexicana con integración vertical que
                transforma el futuro del país. Proyectos accesibles,
                sustentables y de alto impacto social — entregados en tiempo y
                en presupuesto. Un México donde cada persona viva, aprenda y
                crezca en espacios diseñados para su bienestar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-section-sm lg:py-section bg-brand-cream/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              Lo que nos define
            </p>
            <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-bold text-secondary-dark leading-[1.1]">
              Nuestros{" "}
              <span className="italic font-normal text-brand-stone">Valores</span>
            </h2>
            <div className="mt-6 w-16 h-[2px] bg-primary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-warm/50">
            {[
              {
                name: "Confianza",
                description:
                  "Construimos relaciones sólidas con clientes, aliados y usuarios finales a través del cumplimiento, la transparencia y el profesionalismo.",
              },
              {
                name: "Servicio",
                description:
                  "Actuamos con transparencia, respeto y comunicación clara, asegurando un acompañamiento preciso y humano en cada etapa del proceso.",
              },
              {
                name: "Calidad",
                description:
                  "Desarrollamos obras con estándares superiores, materiales de alto desempeño y procesos diseñados para durar.",
              },
              {
                name: "Certeza",
                description:
                  "Ofrecemos soluciones confiables y medibles, garantizando que cada proyecto se entregue con seguridad, claridad y resultados comprobables.",
              },
            ].map((valor, i) => (
              <div
                key={valor.name}
                className={`bg-white p-10 hover-lift animate-fade-up delay-${(i + 1) * 100}`}
              >
                <div className="w-2 h-2 bg-primary rotate-45 mb-6" />
                <h3 className="text-[20px] font-bold text-secondary-dark">
                  {valor.name}
                </h3>
                <p className="mt-4 text-[14px] text-secondary-light leading-relaxed">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {METRICS.map((metric, i) => (
              <div
                key={metric.label}
                className={`relative text-center lg:text-left ${
                  i < METRICS.length - 1 ? "lg:border-r lg:border-gray-100" : ""
                }`}
              >
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-primary leading-none tracking-tight font-[family-name:var(--font-playfair)]">
                  {metric.value}
                </p>
                <p className="mt-3 text-[13px] uppercase tracking-[0.12em] text-secondary-light font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Huella geográfica */}
      <section className="py-section-sm lg:py-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              Presencia Nacional
            </p>
            <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-bold text-secondary-dark leading-[1.1]">
              Nuestra{" "}
              <span className="italic font-normal text-brand-stone">Huella</span>
            </h2>
            <p className="mt-6 text-[15px] text-secondary-light leading-relaxed">
              Más de 25 estados de la República Mexicana. Aeropuertos en Silao,
              Mérida, Mexicali y Zacatecas. Vivienda social en Michoacán,
              Guanajuato y Nuevo León. Obra comunitaria en Puebla.
            </p>
          </div>
          <div className="mt-16 aspect-[16/9] max-w-4xl mx-auto bg-brand-cream/50 border border-brand-warm flex items-center justify-center">
            <p className="text-secondary/30 text-[13px] tracking-wide">
              Mapa de presencia nacional (por agregar)
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
