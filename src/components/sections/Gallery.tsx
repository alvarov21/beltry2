"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { content } from "@/app/content";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % content.gallery.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + content.gallery.length) % content.gallery.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section id="galeria" className="py-24 md:py-[128px] px-5 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col mb-12 text-center md:text-left">
        <h2 className="font-display font-extrabold text-[60px] leading-[60px] tracking-[-1.5px] text-white mb-4">
          En directo
        </h2>
        <p className="font-sans text-lg text-cream/80 max-w-2xl">
          La energía de cada sesión capturada en imágenes.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {content.gallery.map((img, idx) => (
          <figure 
            key={idx}
            onClick={() => openLightbox(idx)}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
            className={`relative aspect-[4/5] rounded-[26px] overflow-hidden cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-accent ${
              idx === 4 ? "hidden md:block" : ""
            }`}
          >
            <div className="absolute inset-0 bg-ink-2 animate-pulse -z-10" />
            <img 
              src={img.src} 
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream hover:text-white z-10 p-2"
            aria-label="Cerrar galería"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-cream hover:text-white p-4"
            aria-label="Imagen anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <img 
            src={content.gallery[currentIndex].src} 
            alt={content.gallery[currentIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-cream hover:text-white p-4"
            aria-label="Siguiente imagen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      )}
    </section>
  );
}
