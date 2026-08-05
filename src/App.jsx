import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import PRDSection from "./components/PRDSection";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import MouseSpotlight from "./components/ui/MouseSpotlight";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <MouseSpotlight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <PRDSection />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
