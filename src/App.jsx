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
