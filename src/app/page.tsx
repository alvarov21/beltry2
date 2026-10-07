"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Hero } from "@/components/sections/Hero";
import { LaPenultima } from "@/components/sections/LaPenultima";
import { Directo } from "@/components/sections/Directo";
import { Comunidad } from "@/components/sections/Comunidad";
import { DondeHaSonado } from "@/components/sections/DondeHaSonado";
import { Contratacion } from "@/components/sections/Contratacion";
import { Navigation } from "@/components/layout/Navigation";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navigation />
      <main className="flex-1 w-full relative">
        <Hero />
        <LaPenultima />
        <Directo />
        <Comunidad />
        <DondeHaSonado />
        <Contratacion />
      </main>
    </>
  );
}
