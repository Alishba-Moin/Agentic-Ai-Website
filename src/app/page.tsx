import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechnologySection from "@/components/Featured1";
import FeaturesSection from "@/components/Featured2";
import AISolutions from "@/components/AI-Solution";
import {Pricing} from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
    <Navbar />
    <Hero />
    <section id="features">
      <TechnologySection />
    </section>
    <section id="technology">
      <FeaturesSection />
    </section>
    <section id="agents">
      <AISolutions />
    </section>
    <section id="pricing">
      <Pricing />
    </section>
    <section id="contact">
      <ContactForm />
    </section>
    <Footer />
  </main>
  );
}