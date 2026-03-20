import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function AboutPreview() {
  return (
    <section className="py-section-sm lg:py-section bg-brand-cream/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text — offset grid for asymmetry */}
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              Sobre AMBIT
            </p>
            <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-bold text-secondary-dark leading-[1.1]">
              Nuestra razón
              <br />
              <span className="italic font-normal text-brand-stone">de ser</span>
            </h2>
            <div className="mt-6 w-16 h-[2px] bg-primary animate-draw-line" />

            <div className="mt-8 space-y-5">
              <p className="text-[15px] text-secondary-light leading-relaxed">
                AMBIT nace con la convicción de que la construcción es una
                herramienta de transformación social y económica. Desde nuestros
                inicios hemos trabajado en proyectos de infraestructura, vivienda
                y equipamiento social que responden a necesidades reales.
              </p>
              <p className="text-[15px] text-secondary leading-relaxed border-accent">
                En AMBIT entendemos que la vivienda es el punto de partida de la
                estabilidad, la dignidad y el desarrollo de las personas.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5">
              {["Confianza", "Calidad", "Servicio", "Certeza"].map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rotate-45 shrink-0" />
                  <span className="text-[14px] font-medium text-secondary-dark tracking-wide">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/nosotros"
              className="group mt-12 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.15em] text-secondary-dark hover:text-primary transition-colors duration-300"
            >
              Conocer más
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Image — dramatic composition */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={IMAGES.aboutTeam}
                  alt="Equipo AMBIT en obra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              {/* Decorative offset block */}
              <div className="absolute -bottom-4 -right-4 w-1/3 h-1/3 border-2 border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
