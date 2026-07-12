import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
