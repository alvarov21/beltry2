"use client";

import { siteConfig } from "@/config/site";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";

export function Contratacion() {
  return (
    <section id="contratar" className="relative min-h-[100dvh] w-full bg-[var(--color-base)] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Portait B&W */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity grayscale">
        <Image
          src="/assets/photos/retrato-estudio-oscuro.jpg"
          alt="Contratar Beltry"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)] via-[var(--color-base)]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col gap-12">
        <h2 className="font-display text-7xl md:text-9xl tracking-tighter leading-[0.8] text-center">
          LA<br/>PENÚLTIMA
        </h2>

        {/* Tarjeta doble bisel permitida */}
        <div className="bg-[#111522]/80 backdrop-blur-xl border border-white/10 shadow-2xl p-1 rounded-sm">
          <div className="border border-white/5 p-8 md:p-12 flex flex-col gap-8 bg-[#0B0F1A]/50">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-2xl font-light">Llévalo a tu sala</h3>
              <p className="text-white/60 text-sm">Rellena el formulario o háblanos por WhatsApp para fechas y condiciones.</p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Nombre / Sala</label>
                  <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-[var(--color-accent)] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Contacto</label>
                  <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-[var(--color-accent)] transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Mensaje / Detalles</label>
                <textarea rows={3} className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-[var(--color-accent)] transition-colors resize-none" />
              </div>
              
              <div className="flex flex-col gap-4 mt-4">
                <button type="submit" className="group flex items-center justify-center gap-2 bg-[var(--color-foreground)] text-[var(--color-base)] px-6 py-4 rounded-sm font-medium hover:scale-[0.98] transition-transform w-full">
                  Enviar solicitud
                  <ArrowRight weight="light" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors py-2 text-sm">
                  <WhatsappLogo weight="light" className="w-5 h-5" />
                  WhatsApp ({siteConfig.contact.whatsappDisplay})
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
