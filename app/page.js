import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import StrategyTeaser from "@/components/StrategyTeaser";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <StrategyTeaser />
      <WhyUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
