import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Highlights from "@/components/sections/Highlights";
import Music from "@/components/sections/Music";
import Gallery from "@/components/sections/Gallery";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Highlights />
      <Music />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}
