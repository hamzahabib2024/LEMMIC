import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectorStatBar from "../components/SectorStatBar";
import SimpleFramework from "../components/SimpleFramework";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectorStatBar />
      <SimpleFramework />
      {/* <About /> */}
      {/* <Roadmap /> */}
      {/* <FAQ /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
