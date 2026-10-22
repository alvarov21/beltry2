"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { content } from "@/app/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-300 ease-out ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-cream-12 py-3.5" : "bg-transparent py-5"
      }`}
    >
      <div className="w-full mx-auto px-6 md:px-12 xl:px-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl tracking-wide uppercase text-cream">
          {content.identity.name}
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[14px] text-cream-45">
          <Link href="#sobre-mi" className="hover:text-cream transition-colors">Bio</Link>
          <Link href="#highlights" className="hover:text-cream transition-colors">Lo último</Link>
          <Link href="#musica" className="hover:text-cream transition-colors">Música</Link>
          <Link href="#galeria" className="hover:text-cream transition-colors">Galería</Link>
        </div>

        <Link 
          href="#booking"
          className="bg-accent text-white text-[14px] font-semibold px-5 py-2 rounded-full hover:bg-accent/90 active:scale-[0.97] transition-all duration-150 ease-out cursor-pointer"
        >
          Booking
        </Link>
      </div>
    </nav>
  );
}
