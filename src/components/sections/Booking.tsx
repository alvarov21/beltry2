"use client";

import { useState } from "react";
import { content } from "@/app/content";

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

  return (
    <section id="booking" className="py-24 md:py-[128px] px-5 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        
        {/* Contacto Directo */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <span className="font-display font-semibold text-xs tracking-widest uppercase text-cream-45 mb-4">
            Contratación
          </span>
          <h2 className="font-display font-extrabold text-[60px] leading-[60px] tracking-[-1.5px] text-white mb-6">
            Booking
          </h2>
          <p className="font-sans text-lg text-cream/80 mb-10">
            Sala, festival o evento privado. Cuéntame la fecha y montamos la sesión.
          </p>

          <div className="flex flex-col gap-4">
            <a href={`mailto:${content.contact.email}`} className="text-lg text-white hover:text-accent transition-colors">
              {content.contact.email}
            </a>
            <a href={`tel:${content.contact.phone.replace(/\s+/g, '')}`} className="text-lg text-white hover:text-accent transition-colors">
              {content.contact.phone}
            </a>
            
            <a 
              href={content.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-2xl border border-cream-12 p-4 sm:p-5 hover:border-accent/50 transition-colors flex items-center justify-between group"
            >
              <span className="font-sans font-medium text-white">Escribir por WhatsApp</span>
              <svg className="text-accent group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>

            <a 
              href={content.contact.presskitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-cream-12 bg-accent/10 p-4 sm:p-5 hover:bg-accent/20 transition-colors flex flex-col gap-1"
            >
              <span className="font-sans font-medium text-white flex items-center gap-2">
                Descargar presskit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </span>
              <span className="font-sans text-sm text-cream-45">Bio, fotos y rider · PDF</span>
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-2/3">
          <form 
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-cream-12 bg-ink-2/60 p-8 sm:p-10 flex flex-col gap-5 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input required type="text" name="nombre" placeholder="Nombre / Sala *" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              <input required type="email" name="email" placeholder="Email *" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              <input type="tel" name="telefono" placeholder="Teléfono" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              <select name="tipo" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none">
                <option value="Sala/Club">Sala / Club</option>
                <option value="Festival">Festival</option>
                <option value="Evento privado">Evento privado</option>
                <option value="Otro">Otro</option>
              </select>
              <input required type="date" name="fecha" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
              <input required type="text" name="ciudad" placeholder="Ciudad *" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              <input type="time" name="horaInicio" placeholder="Hora de inicio" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
              <input type="time" name="horaFin" placeholder="Hora de fin" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
            </div>
            <textarea required name="mensaje" placeholder="Mensaje *" rows={4} onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"></textarea>
            
            <div className="mt-4 flex flex-col items-start gap-3">
              <button type="submit" className="bg-accent text-white font-sans text-[16px] font-bold px-7 py-4 rounded-full hover:bg-accent/90 transition-colors self-start">
                Enviar solicitud
              </button>
              <span className="text-xs text-cream-45">
                * Esto abrirá tu cliente de correo (ej. Gmail, Apple Mail) con el mensaje preparado.
              </span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
