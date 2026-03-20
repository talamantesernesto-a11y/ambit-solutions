import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative bg-secondary-dark overflow-hidden min-h-[85vh] flex items-center">
      {/* Background image */}
      <Image
        src={IMAGES.hero}
        alt="Sitio de construcción AMBIT"
        fill
        priority
        className="object-cover opacity-20"
        sizes="100vw"
      />
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/90 via-secondary-dark/80 to-brand-terracotta/30" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
      {/* Diagonal line motif */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
        <svg className="w-full h-full" viewBox="0 0 600 800" fill="none" preserveAspectRatio="none">
          <line x1="0" y1="800" x2="600" y2="0" stroke="white" strokeWidth="1" />
          <line x1="100" y1="800" x2="600" y2="100" stroke="white" strokeWidth="0.5" />
          <line x1="200" y1="800" x2="600" y2="200" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main content — offset for asymmetry */}
          <div className="lg:col-span-8 xl:col-span-7">
            <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-sand mb-8">
              Ingeniería &amp; Construcción
            </p>

            <h1 className="animate-fade-up delay-100 text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight">
              Construcción{" "}
              <span className="italic font-normal text-brand-sand">consciente,</span>
              <br />
              espacios que{" "}
              <span className="text-primary">trascienden</span>
            </h1>

            <p className="animate-fade-up delay-200 mt-8 text-[17px] text-secondary-200 leading-relaxed max-w-lg">
              Más de una década construyendo proyectos industriales,
              infraestructura y vivienda social en México. Nuestros resultados se
              miden en personas, no en m².
            </p>

            <div className="animate-fade-up delay-300 mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="group relative inline-flex items-center justify-center bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white overflow-hidden transition-all duration-300 hover:bg-primary-dark"
              >
                Cotizar Proyecto
                <svg className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>

          {/* Vertical accent on right */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end items-end">
            <div className="animate-fade-in delay-500 text-right">
              <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-primary ml-auto mb-6" />
              <p className="text-[12px] uppercase tracking-[0.2em] text-secondary-200/60 leading-relaxed">
                Vivienda / Infraestructura
                <br />
                Espacios Comunitarios
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-terracotta via-primary to-brand-sand" />
    </section>
  );
}
