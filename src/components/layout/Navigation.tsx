"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0F1A]/80 backdrop-blur-md border border-white/10 shadow-lg"
            : "bg-transparent border border-transparent"
        }`}
      >
        <Link href="#escuchar" className="text-sm font-medium tracking-wide hover:text-white/70 transition-colors">
          Escuchar
        </Link>
        <Link href="#directo" className="text-sm font-medium tracking-wide hover:text-white/70 transition-colors">
          Directo
        </Link>
        <Link href="#noches" className="text-sm font-medium tracking-wide hover:text-white/70 transition-colors">
          Noches
        </Link>
        <Link
          href="#contratar"
          className="text-sm font-medium tracking-wide bg-[var(--color-foreground)] text-[var(--color-base)] px-4 py-1.5 rounded-full hover:scale-[0.98] transition-transform"
        >
          Contratar
        </Link>
      </nav>
    </div>
  );
}
