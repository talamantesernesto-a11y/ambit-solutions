import Link from "next/link";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  home: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  building: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  users: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  ),
  clipboard: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  ),
};

export function ServicesPreview() {
  return (
    <section className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header — editorial left-aligned */}
        <div className="max-w-xl mb-16 lg:mb-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            Nuestros Servicios
          </p>
          <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-bold text-secondary-dark leading-[1.1]">
            Soluciones integrales
            <br />
            <span className="italic font-normal text-brand-stone">de construcción</span>
          </h2>
          <div className="mt-6 w-16 h-[2px] bg-primary animate-draw-line" />
          <p className="mt-6 text-[15px] text-secondary-light leading-relaxed">
            Participamos activamente en toda la cadena de valor, desde la
            planeación hasta la entrega, con control total de calidad y
            eficiencia.
          </p>
        </div>

        {/* Service cards — editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-white p-8 lg:p-10 hover:bg-brand-cream/50 transition-colors duration-500 animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div className="text-brand-terracotta mb-8 group-hover:text-primary transition-colors duration-300">
                {ICONS[service.icon]}
              </div>
              <h3 className="text-[18px] font-bold text-secondary-dark leading-snug">
                {service.title}
              </h3>
              <p className="mt-4 text-[14px] text-secondary-light leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 w-0 h-[1.5px] bg-primary transition-all duration-500 group-hover:w-10" />
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16">
          <Link
            href="/servicios"
            className="group inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.15em] text-secondary-dark hover:text-primary transition-colors duration-300"
          >
            Conocer todos los servicios
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
