import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const addressFull = `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.colony}, ${SITE_CONFIG.address.municipality}, ${SITE_CONFIG.address.city}`;

  return (
    <footer className="bg-secondary-dark text-white">
      {/* Terracotta accent line */}
      <div className="h-[3px] bg-gradient-to-r from-brand-terracotta via-primary to-brand-sand" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand — wider column */}
          <div className="md:col-span-5">
            <Image
              src="/images/logo-ambit.png"
              alt="AMBIT"
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-6 text-[15px] text-secondary-200 leading-relaxed max-w-sm">
              Cadena de valor completa. Un solo interlocutor. Certeza de entrega.
              +25 años construyendo el futuro de México.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-sand">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-secondary-200 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-sand">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3.5 text-[14px] text-secondary-200">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="leading-relaxed">{addressFull}</li>
              <li>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-secondary-200/60 tracking-wide">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}
          </p>
          <p className="text-[12px] text-secondary-200/40 tracking-wide">
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
