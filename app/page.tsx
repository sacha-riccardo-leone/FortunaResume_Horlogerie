import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PrintButton from "@/components/PrintButton";
import PrintLayout from "@/components/PrintLayout";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden print:min-h-0 print:overflow-visible">
      <div className="print:hidden">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
      <PrintLayout />
      <PrintButton />
    </main>
  );
}
