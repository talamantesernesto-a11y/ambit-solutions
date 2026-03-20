"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(200,106,58,0.1)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-ambit.svg"
              alt="AMBIT"
              width={140}
              height={40}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-medium uppercase tracking-[0.15em] text-secondary hover:text-secondary-dark transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="ml-2 border border-secondary-dark px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-secondary-dark hover:bg-secondary-dark hover:text-white transition-all duration-300"
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-secondary-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 h-[1.5px] w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-2.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-[1.5px] w-6 bg-current transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-2.5 -rotate-45" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMenuOpen ? "max-h-96 pb-8" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-gray-100 pt-6">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-[15px] font-medium uppercase tracking-[0.1em] text-secondary-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-4 border border-secondary-dark py-3.5 text-center text-[13px] font-semibold uppercase tracking-[0.15em] text-secondary-dark hover:bg-secondary-dark hover:text-white transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Cotizar Proyecto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
