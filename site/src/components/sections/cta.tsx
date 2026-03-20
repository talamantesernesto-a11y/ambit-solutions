import Link from "next/link";

export function CTA() {
  return (
    <section className="relative bg-secondary-dark overflow-hidden">
      {/* Subtle diagonal lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 400">
          <line x1="0" y1="400" x2="800" y2="0" stroke="white" strokeWidth="1" />
          <line x1="200" y1="400" x2="800" y2="100" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.1]">
              ¿Listo para construir
              <br />
              <span className="italic font-normal text-brand-sand">tu próximo proyecto?</span>
            </h2>
            <p className="mt-6 text-[16px] text-secondary-200 max-w-lg leading-relaxed">
              Cada proyecto empieza con una conversación. Cuéntanos qué necesitas y
              te ayudamos a hacerlo realidad.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-primary-dark transition-all duration-300"
            >
              Solicitar Cotización
              <svg className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:+525556160991"
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              +52 55 5616 0991
            </a>
          </div>
        </div>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}
