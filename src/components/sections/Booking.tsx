"use client";

import { useState, useEffect } from "react";
import { content } from "@/app/content";
import AdmitOneTicket, { playShutterSound } from "@/components/ui/admit-one-ticket";

export default function Booking() {
  const [formData, setFormData] = useState({
    nombre: "", email: "", telefono: "", tipo: "Sala/Club",
    fecha: "", ciudad: "", horaInicio: "", horaFin: "", mensaje: ""
  });

  const [ticketWidth, setTicketWidth] = useState(520);

  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      if (w < 380) setTicketWidth(280);
      else if (w < 480) setTicketWidth(330);
      else if (w < 640) setTicketWidth(420);
      else if (w < 768) setTicketWidth(460);
      else setTicketWidth(520);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
    <section id="booking" className="py-16 md:py-[128px] px-4 sm:px-6 md:px-8 w-full flex flex-col items-center">
      
      {/* 1. Cabecera unificada y centrada */}
      <div className="text-center mb-8 sm:mb-12 max-w-xl px-2">
        <span className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-3 block">
          Contratación
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-3">
          Booking
        </h2>
        <p className="font-sans text-sm sm:text-base text-cream-45">
          Sala, festival o evento privado. Cuéntame la fecha y montamos la sesión.
        </p>
      </div>

      {/* 2. Ticket interactivo centrado y escalado de forma nativa */}
      <div className="mb-10 sm:mb-14 flex flex-col items-center w-full group">
        <button 
          onClick={handleTicketClick}
          className="transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98] focus:outline-none flex justify-center w-full cursor-pointer"
          aria-label="Descargar presskit"
          type="button"
        >
          <AdmitOneTicket 
            tilt={true} 
            width={ticketWidth}
            name={content.identity.name}
            presenter="Urbano / Reggaeton"
            event="Contratación"
            venue="España y LATAM"
            dates="Tour 2026"
          />
        </button>
        <span className="mt-4 text-xs sm:text-sm font-medium text-cream-45 uppercase tracking-widest font-sans transition-colors group-hover:text-white pointer-events-none text-center">
          Click para descargar presskit
        </span>
      </div>

      {/* 3. Formulario centrado con diseño perfecto en móvil y desktop */}
      <div className="w-full max-w-2xl flex flex-col justify-center relative">
        {/* Glow decorativo de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
        
        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5 sm:gap-6 w-full p-5 sm:p-8 md:p-12 bg-ink-2 border border-cream-12 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Nombre / sala</label>
              <input required type="text" name="nombre" placeholder="Tu nombre o sala" onChange={handleChange} className="w-full rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Email</label>
              <input required type="email" name="email" placeholder="tucorreo@ejemplo.com" onChange={handleChange} className="w-full rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Teléfono</label>
              <input type="tel" name="telefono" placeholder="Opcional" onChange={handleChange} className="w-full rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Tipo de evento</label>
              <select name="tipo" onChange={handleChange} className="w-full rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none">
                <option value="Sala/Club" className="bg-ink">Sala / Club</option>
                <option value="Festival" className="bg-ink">Festival</option>
                <option value="Evento privado" className="bg-ink">Evento privado</option>
                <option value="Otro" className="bg-ink">Otro</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Fecha</label>
              <input required type="date" name="fecha" onChange={handleChange} className="w-full rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Ciudad</label>
              <input required type="text" name="ciudad" placeholder="Opcional" onChange={handleChange} className="w-full rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Hora de inicio</label>
              <input type="time" name="horaInicio" onChange={handleChange} className="w-full rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-cream-45 font-sans">Hora de fin</label>
              <input type="time" name="horaFin" onChange={handleChange} className="w-full rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-1">
            <label className="text-xs text-cream-45 font-sans">Mensaje</label>
            <textarea required name="mensaje" placeholder="Cuéntame los detalles: horario, aforo, presupuesto..." rows={4} onChange={handleChange} className="w-full rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-accent text-white font-sans text-base font-bold px-7 py-3.5 sm:py-4 rounded-full hover:bg-accent/90 transition-colors shadow-[0_0_20px_-5px_rgba(255,36,82,0.4)] mt-2">
            Enviar solicitud
          </button>
          <span className="text-[11px] sm:text-xs text-cream-45 text-center mt-1">
            * Esto abrirá tu cliente de correo (ej. Gmail, Apple Mail) con el mensaje preparado.
          </span>
        </form>
      </div>

    </section>
  );
}
