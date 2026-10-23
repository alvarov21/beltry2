"use client";

import { useState, useEffect } from "react";
import { content } from "@/app/content";
import AdmitOneTicket, { playShutterSound } from "@/components/ui/admit-one-ticket";

export default function Booking() {
  const [formData, setFormData] = useState({
    nombre: "", email: "", telefono: "", tipo: "Sala/Club",
    fecha: "", ciudad: "", horaInicio: "", horaFin: "", mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [ticketWidth, setTicketWidth] = useState(320);

  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      const safeWidth = Math.min(w - 32, 520);
      if (w < 380) setTicketWidth(Math.min(safeWidth, 290));
      else if (w < 480) setTicketWidth(Math.min(safeWidth, 340));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSubmitted(false);

    const payload = {
      _subject: `🎯 Solicitud de Contratación: ${formData.nombre} (${formData.tipo || "Evento"})`,
      _captcha: "false",
      _template: "table",
      _replyto: formData.email,
      "Nombre o Sala": formData.nombre,
      "Email de contacto": formData.email,
      "Teléfono": formData.telefono || "No especificado",
      "Tipo de evento": formData.tipo || "No especificado",
      "Fecha del evento": formData.fecha || "No especificada",
      "Ciudad": formData.ciudad || "No especificada",
      "Horario": (formData.horaInicio || formData.horaFin)
        ? `${formData.horaInicio || "?"} - ${formData.horaFin || "?"}`
        : "No especificado",
      "Mensaje o detalles": formData.mensaje,
    };

    try {
      let isSuccess = false;
      let lastErrorMessage = "";

      // 1. Envío directo desde el navegador (conexión real del usuario)
      try {
        const directRes = await fetch(`https://formsubmit.co/ajax/${content.contact.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const directData = await directRes.json().catch(() => null);
        if (directRes.ok && (directData?.success === true || directData?.success === "true")) {
          isSuccess = true;
        } else if (directData?.message) {
          lastErrorMessage = directData.message;
          if (lastErrorMessage.toLowerCase().includes("activation") || lastErrorMessage.toLowerCase().includes("activate")) {
            throw new Error(`⚠️ Este formulario requiere una activación única. FormSubmit ha enviado un email a ${content.contact.email}. Por favor, abre tu buzón de Hostinger y pulsa «Activate Form» para habilitar los envíos.`);
          }
        }
      } catch (clientErr) {
        if (clientErr instanceof Error && clientErr.message.includes("Activate Form")) {
          throw clientErr;
        }
        console.warn("Direct submission notice:", clientErr);
      }

      if (!isSuccess) {
        throw new Error(lastErrorMessage || "No se pudo procesar la solicitud en este momento. Por favor inténtalo de nuevo.");
      }

      setSubmitted(true);
      setFormData({
        nombre: "", email: "", telefono: "", tipo: "Sala/Club",
        fecha: "", ciudad: "", horaInicio: "", horaFin: "", mensaje: ""
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error al enviar la solicitud. Inténtalo de nuevo.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTicketClick = () => {
    playShutterSound();
    window.open(content.contact.presskitUrl, "_blank");
  };

  return (
    <section id="booking" className="py-16 md:py-[128px] px-4 sm:px-6 md:px-8 w-full flex flex-col items-center overflow-hidden">
      
      {/* 1. Cabecera unificada y centrada */}
      <div className="text-center mb-8 sm:mb-12 max-w-xl px-2 w-full">
        <span className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-3 block">
          Contratación
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-3">
          Booking
        </h2>
        <p className="font-sans text-sm sm:text-base text-cream-45">
          Sala, festival o evento privado. Cuéntanos la fecha y la ciudad, y montamos una noche que la gente recuerde.
        </p>
      </div>

      {/* 2. Ticket interactivo centrado y escalado de forma nativa */}
      <div className="mb-10 sm:mb-14 flex flex-col items-center w-full max-w-full overflow-hidden group px-2">
        <button 
          onClick={handleTicketClick}
          className="transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98] focus:outline-none flex justify-center items-center w-full max-w-full cursor-pointer"
          aria-label="Descargar presskit"
          type="button"
        >
          <div className="flex justify-center items-center max-w-full overflow-hidden">
            <AdmitOneTicket 
              tilt={true} 
              width={ticketWidth}
              name={content.identity.name}
              presenter="Urbano / Reggaeton"
              event="Contratación"
              venue="España"
              dates="Tour 2026"
            />
          </div>
        </button>
        <span className="mt-4 text-xs sm:text-sm font-medium text-cream-45 uppercase tracking-widest font-sans transition-colors group-hover:text-white pointer-events-none text-center">
          Toca para descargar el presskit
        </span>
      </div>

      {/* 3. Formulario centrado con cajas perfectamente alineadas en móvil y desktop */}
      <div className="w-full max-w-2xl flex flex-col justify-center items-center relative">
        {/* Glow decorativo de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
        
        <form 
          onSubmit={handleSubmit} 
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.target as HTMLElement).tagName !== "TEXTAREA") {
              e.preventDefault();
            }
          }}
          className="relative z-10 flex flex-col gap-4 sm:gap-6 w-full max-w-full p-4 sm:p-8 md:p-12 bg-ink-2 border border-cream-12 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl overflow-hidden box-border"
        >
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-full">
            <div className="flex flex-col gap-2 w-full min-w-0">
              <label htmlFor="booking-nombre" className="text-xs text-cream-45 font-sans">Nombre / sala</label>
              <input id="booking-nombre" required type="text" name="nombre" value={formData.nombre} placeholder="Tu nombre o el de la sala" onChange={handleChange} className="w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-base md:text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors min-h-[48px]" />
            </div>
            <div className="flex flex-col gap-2 w-full min-w-0">
              <label htmlFor="booking-email" className="text-xs text-cream-45 font-sans">Email</label>
              <input id="booking-email" required type="email" name="email" value={formData.email} placeholder="tucorreo@ejemplo.com" onChange={handleChange} className="w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-base md:text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors min-h-[48px]" />
            </div>
            <div className="flex flex-col gap-2 w-full min-w-0">
              <label htmlFor="booking-telefono" className="text-xs text-cream-45 font-sans">Teléfono</label>
              <input id="booking-telefono" type="tel" name="telefono" value={formData.telefono} placeholder="Opcional" onChange={handleChange} className="w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-base md:text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors min-h-[48px]" />
            </div>
            <div className="flex flex-col gap-2 w-full min-w-0">
              <label htmlFor="booking-tipo" className="text-xs text-cream-45 font-sans">Tipo de evento</label>
              <div className="relative w-full">
                <select 
                  id="booking-tipo"
                  name="tipo" 
                  value={formData.tipo}
                  onChange={handleChange} 
                  className="w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 pr-10 text-base md:text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none min-h-[48px] cursor-pointer"
                >
                  <option value="Sala/Club" className="bg-ink">Sala / Club</option>
                  <option value="Festival" className="bg-ink">Festival</option>
                  <option value="Evento privado" className="bg-ink">Evento privado</option>
                  <option value="Otro" className="bg-ink">Otro</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-cream-45">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full min-w-0">
              <label htmlFor="booking-fecha" className="text-xs text-cream-45 font-sans">Fecha</label>
              <div className="relative w-full">
                <input 
                  id="booking-fecha"
                  required 
                  type="date" 
                  name="fecha" 
                  value={formData.fecha}
                  onClick={(e) => {
                    try { e.currentTarget.showPicker?.(); } catch {}
                  }}
                  onChange={handleChange} 
                  className={`w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 pr-10 text-base md:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark] min-h-[48px] cursor-pointer ${formData.fecha ? "text-white" : "text-cream-45"}`} 
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-cream-45">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full min-w-0">
              <label htmlFor="booking-ciudad" className="text-xs text-cream-45 font-sans">Ciudad</label>
              <input id="booking-ciudad" required type="text" name="ciudad" value={formData.ciudad} placeholder="Ej. Barcelona" onChange={handleChange} className="w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 text-base md:text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors min-h-[48px]" />
            </div>
            <div className="flex flex-col gap-2 w-full min-w-0">
              <label htmlFor="booking-hora-inicio" className="text-xs text-cream-45 font-sans">Hora de inicio</label>
              <div className="relative w-full">
                <input 
                  id="booking-hora-inicio"
                  type="time" 
                  name="horaInicio" 
                  value={formData.horaInicio}
                  onClick={(e) => {
                    try { e.currentTarget.showPicker?.(); } catch {}
                  }}
                  onChange={handleChange} 
                  className={`w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 pr-10 text-base md:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark] min-h-[48px] cursor-pointer ${formData.horaInicio ? "text-white" : "text-cream-45"}`} 
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-cream-45">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full min-w-0">
              <label htmlFor="booking-hora-fin" className="text-xs text-cream-45 font-sans">Hora de fin</label>
              <div className="relative w-full">
                <input 
                  id="booking-hora-fin"
                  type="time" 
                  name="horaFin" 
                  value={formData.horaFin}
                  onClick={(e) => {
                    try { e.currentTarget.showPicker?.(); } catch {}
                  }}
                  onChange={handleChange} 
                  className={`w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3 sm:py-3.5 pr-10 text-base md:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark] min-h-[48px] cursor-pointer ${formData.horaFin ? "text-white" : "text-cream-45"}`} 
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-cream-45">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-1 w-full min-w-0">
            <label htmlFor="booking-mensaje" className="text-xs text-cream-45 font-sans">Mensaje</label>
            <textarea id="booking-mensaje" required name="mensaje" value={formData.mensaje} placeholder="Aforo, horario, tipo de público, presupuesto…" rows={4} onChange={handleChange} className="w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border border-cream-12 bg-ink/50 px-4 py-3.5 text-base md:text-sm text-white placeholder:text-cream/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"></textarea>
          </div>
          
          {submitted && (
            <div className="p-4 rounded-xl bg-accent/20 border border-accent/40 text-white text-center text-sm font-sans flex flex-col gap-1">
              <span className="font-bold">¡Solicitud enviada con éxito!</span>
              <span className="text-cream/80 text-xs">Nos pondremos en contacto contigo lo antes posible para cerrar la fecha.</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-center text-sm font-sans">
              {errorMessage}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-accent text-white font-sans text-base font-bold px-7 py-3.5 sm:py-4 rounded-full hover:bg-accent/90 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-200 ease-out shadow-[0_0_20px_-5px_rgba(255,36,82,0.4)] mt-2 cursor-pointer flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Enviando solicitud...</span>
              </>
            ) : (
              <span>Enviar solicitud</span>
            )}
          </button>
        </form>
      </div>

    </section>
  );
}
