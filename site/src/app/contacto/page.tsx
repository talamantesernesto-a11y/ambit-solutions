"use client";

import { useState, type FormEvent } from "react";
import { SITE_CONFIG } from "@/lib/constants";

interface FormData {
  readonly nombre: string;
  readonly empresa: string;
  readonly email: string;
  readonly telefono: string;
  readonly tipo: string;
  readonly mensaje: string;
}

const INITIAL_FORM: FormData = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  tipo: "",
  mensaje: "",
};

export default function ContactoPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // TODO: Connect to API endpoint (Resend or similar)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("sent");
    setForm(INITIAL_FORM);
  }

  const addressFull = `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.colony}, ${SITE_CONFIG.address.municipality}, ${SITE_CONFIG.address.city}`;

  const inputClass =
    "w-full border-b border-gray-200 bg-transparent px-0 py-3.5 text-[15px] text-secondary-dark placeholder-secondary-200/70 focus:border-primary focus:outline-none transition-colors duration-300";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary-dark py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/95 via-secondary-dark/90 to-brand-terracotta/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-sand">
            Contacto
          </p>
          <h1 className="animate-fade-up delay-100 mt-4 text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#FFF1E6] max-w-3xl leading-[1.08] hero-heading">
            Cuéntanos{" "}
            <span className="italic font-normal text-brand-sand">el reto</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-8 text-[17px] text-secondary-200 max-w-xl leading-relaxed">
            Nuestro equipo evalúa tu proyecto sin costo y te propone la mejor
            ruta de ejecución. Respondemos en menos de 24 horas hábiles.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-terracotta via-primary to-brand-sand" />
      </section>

      <section className="py-section-sm lg:py-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-7">
              {status === "sent" ? (
                <div className="py-20 text-center">
                  <div className="w-3 h-3 bg-brand-sage rotate-45 mx-auto mb-8" />
                  <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-secondary-dark">
                    Mensaje enviado
                  </h3>
                  <p className="mt-4 text-[15px] text-secondary-light">
                    Nos pondremos en contacto contigo pronto.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-[13px] font-semibold uppercase tracking-[0.15em] text-primary hover:text-primary-dark transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary mb-1"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={form.nombre}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary mb-1"
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary mb-1"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="tipo"
                      className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary mb-1"
                    >
                      Tipo de proyecto
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={form.tipo}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="vivienda">Vivienda</option>
                      <option value="infraestructura">Infraestructura</option>
                      <option value="comunitario">Espacios Comunitarios</option>
                      <option value="supervision">Supervisión de Obra</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary mb-1"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      value={form.mensaje}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {status === "sending" ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensaje
                        <svg className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="bg-secondary-dark p-10 lg:p-12 text-white space-y-10">
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-sand">
                    Teléfono / WhatsApp
                  </h3>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="mt-3 block text-[18px] font-medium text-white hover:text-primary transition-colors duration-300"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>

                <div className="w-full h-[1px] bg-white/10" />

                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-sand">
                    Email
                  </h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="mt-3 block text-[18px] font-medium text-white hover:text-primary transition-colors duration-300"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>

                <div className="w-full h-[1px] bg-white/10" />

                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-sand">
                    Dirección
                  </h3>
                  <p className="mt-3 text-[15px] text-secondary-200 leading-relaxed">
                    {addressFull}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/10" />

                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-sand">
                    LinkedIn
                  </h3>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-[15px] text-white hover:text-primary transition-colors duration-300"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    AMBIT Desarrollos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
