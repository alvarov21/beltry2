"use client";

import { useState } from "react";
import { content } from "@/app/content";
import AdmitOneTicket, { playShutterSound } from "@/components/ui/admit-one-ticket";

export default function Booking() {
  const [formData, setFormData] = useState({
    nombre: "", email: "", telefono: "", tipo: "Sala/Club",
    fecha: "", ciudad: "", horaInicio: "", horaFin: "", mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Booking request: ${formData.tipo} - ${formData.nombre}`;
    const body = `
Nombre/Sala: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Tipo de evento: ${formData.tipo}
Fecha: ${formData.fecha}
Ciudad: ${formData.ciudad}
Horario: ${formData.horaInicio} - ${formData.horaFin}

Mensaje:
${formData.mensaje}
    `.trim();

    const mailtoUrl = `mailto:${content.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleTicketClick = () => {
    playShutterSound();
    window.open(content.contact.presskitUrl, "_blank");
  };

  return (
    <section id="booking" className="py-24 md:py-[128px] px-5 md:px-8 w-full flex flex-col items-center">
      {/* 1. Ticket interactivo como cabecera (Adaptado a Móvil y Desktop) */}
      <div className="mb-10 sm:mb-16 md:mb-20 flex flex-col items-center w-full pointer-events-auto group">
        <div className="flex items-center justify-center w-full py-2 min-h-[140px] min-[400px]:min-h-[180px] sm:min-h-[220px]">
          <button 
            onClick={handleTicketClick}
            className="scale-[0.55] min-[400px]:scale-[0.7] sm:scale-[0.85] md:scale-100 origin-center transition-transform duration-500 hover:scale-[0.58] min-[400px]:hover:scale-[0.73] sm:hover:scale-[0.88] md:hover:scale-[1.02] active:scale-[0.96] focus:outline-none"
            aria-label="Descargar presskit"
            type="button"
          >
            <AdmitOneTicket 
              tilt={true} 
              name={content.identity.name}
              presenter="Urbano / Reggaeton"
              event="Contratación"
              venue="España y LATAM"
              dates="Tour 2026"
            />
          </button>
        </div>
        <span className="mt-1 sm:mt-4 text-xs sm:text-sm font-medium text-cream-45 uppercase tracking-widest font-sans transition-colors group-hover:text-white pointer-events-none text-center">
          Click para descargar presskit
        </span>
      </div>

      {/* 2. Formulario centrado */}
      <div className="w-full max-w-2xl flex flex-col justify-center relative">
        {/* Decorative blur behind form to make it pop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-10 sm:hidden">
          <h2 className="font-display font-bold text-4xl text-white uppercase tracking-tight mb-2">Booking</h2>
          <p className="font-sans text-sm text-cream-45">Sala, festival o evento privado. Cuéntame la fecha y montamos la sesión.</p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6 w-full p-5 sm:p-8 md:p-12 bg-ink-2 border border-cream-12 rounded-[2rem] shadow-2xl">
          <div className="text-center mb-4 hidden sm:block">
            <p className="font-sans text-base text-cream-45">Completa los detalles de tu evento y montamos la sesión.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Nombre / sala</label>
              <input required type="text" name="nombre" placeholder="Tu nombre o sala" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Email</label>
              <input required type="email" name="email" placeholder="tucorreo@ejemplo.com" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Teléfono</label>
              <input type="tel" name="telefono" placeholder="Opcional" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Tipo de evento</label>
              <select name="tipo" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none">
                <option value="Sala/Club" className="bg-ink">Sala / Club</option>
                <option value="Festival" className="bg-ink">Festival</option>
                <option value="Evento privado" className="bg-ink">Evento privado</option>
                <option value="Otro" className="bg-ink">Otro</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Fecha</label>
              <input required type="date" name="fecha" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Ciudad</label>
              <input required type="text" name="ciudad" placeholder="Opcional" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Hora de inicio</label>
              <input type="time" name="horaInicio" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Hora de fin</label>
              <input type="time" name="horaFin" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-2">
            <label className="text-xs text-cream-45 font-sans">Mensaje</label>
            <textarea required name="mensaje" placeholder="Cuéntame los detalles: horario, aforo, presupuesto..." rows={4} onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-accent text-white font-sans text-[16px] font-bold px-7 py-4 rounded-full hover:bg-accent/90 transition-colors shadow-[0_0_20px_-5px_rgba(255,36,82,0.4)] mt-4">
            Enviar solicitud
          </button>
          <span className="text-xs text-cream-45 text-center mt-2">
            * Esto abrirá tu cliente de correo (ej. Gmail, Apple Mail) con el mensaje preparado.
          </span>
        </form>
      </div>

    </section>
  );
}
