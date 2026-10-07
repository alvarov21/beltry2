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
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Tarjeta Izquierda (Contacto Directo) */}
        <div className="w-full lg:w-1/2 relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-ink-2 p-8 sm:p-10 border border-cream-12">
          {/* Imagen de fondo */}
          <img 
            src="/assets/about.jpg" 
            alt="Beltry Booking"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/80 to-ink-2/40 pointer-events-none" />
          <div className="absolute inset-0 bg-accent/5 mix-blend-color pointer-events-none" />
          
          <div className="relative z-10 mb-20">
            <span className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-4 block">
              Contratación
            </span>
            <h2 className="font-display font-extrabold text-[48px] md:text-[60px] leading-[1.1] tracking-[-1.5px] text-white mb-6">
              Booking
            </h2>
            <p className="font-sans text-lg text-cream/80 max-w-sm">
              Sala, festival o evento privado. Cuéntame la fecha y montamos la sesión.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-3">
            <a href={`mailto:${content.contact.email}`} className="flex items-center justify-between rounded-2xl border border-cream-12 bg-ink/50 p-4 hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-3">
                <svg className="text-cream-45" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="font-sans text-[15px] font-medium text-white">{content.contact.email}</span>
              </div>
              <svg className="text-cream-45 group-hover:text-accent transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>

            <a href={`tel:${content.contact.phone.replace(/\s+/g, '')}`} className="flex items-center justify-between rounded-2xl border border-cream-12 bg-ink/50 p-4 hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-3">
                <svg className="text-cream-45" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="font-sans text-[15px] font-medium text-white">{content.contact.phone}</span>
              </div>
              <svg className="text-cream-45 group-hover:text-accent transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            
            <a href={content.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl border border-cream-12 bg-ink/50 p-4 hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-3">
                <svg className="text-cream-45" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <span className="font-sans text-[15px] font-medium text-white">WhatsApp</span>
              </div>
              <svg className="text-cream-45 group-hover:text-accent transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>

            <a href={content.contact.presskitUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl border border-cream-12 bg-accent/10 p-4 hover:border-accent/50 hover:bg-accent/20 transition-colors group">
              <div className="flex items-center gap-3">
                <svg className="text-accent" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg>
                <span className="font-sans text-[15px] font-medium text-white">Descargar presskit</span>
              </div>
              <svg className="text-accent" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-cream-45 font-sans">Nombre / sala</label>
                <input required type="text" name="nombre" placeholder="Tu nombre o sala" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-cream-45 font-sans">Email</label>
                <input required type="email" name="email" placeholder="tucorreo@ejemplo.com" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-cream-45 font-sans">Teléfono</label>
                <input type="tel" name="telefono" placeholder="Opcional" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-cream-45 font-sans">Tipo de evento</label>
                <select name="tipo" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-transparent px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none">
                  <option value="Sala/Club" className="bg-ink">Sala / Club</option>
                  <option value="Festival" className="bg-ink">Festival</option>
                  <option value="Evento privado" className="bg-ink">Evento privado</option>
                  <option value="Otro" className="bg-ink">Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-cream-45 font-sans">Fecha</label>
                <input required type="date" name="fecha" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-cream-45 font-sans">Ciudad</label>
                <input required type="text" name="ciudad" placeholder="Opcional" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-cream-45 font-sans">Hora de inicio</label>
                <input type="time" name="horaInicio" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-cream-45 font-sans">Hora de fin</label>
                <input type="time" name="horaFin" onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-xs text-cream-45 font-sans">Mensaje</label>
              <textarea required name="mensaje" placeholder="Cuéntame los detalles: horario, aforo, presupuesto..." rows={4} onChange={handleChange} className="w-full rounded-2xl border border-cream-12 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"></textarea>
            </div>
            
            <button type="submit" className="w-full bg-accent text-white font-sans text-[16px] font-bold px-7 py-4 rounded-full hover:bg-accent/90 transition-colors shadow-[0_0_20px_-5px_rgba(106,61,255,0.4)] mt-4">
              Enviar solicitud
            </button>
            <span className="text-xs text-cream-45 text-center mt-2">
              * Esto abrirá tu cliente de correo (ej. Gmail, Apple Mail) con el mensaje preparado.
            </span>
          </form>
        </div>

      </div>
    </section>
  );
}
