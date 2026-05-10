import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { Brands } from "../components/Brands";
import { Experts } from "../components/Experts";
import { Portfolio } from "../components/Portfolio";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { HowItWorks } from "../components/HowItWorks";
import { WhyChooseUs } from "../components/WhyChooseUs";

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B132B] text-slate-900 dark:text-slate-100 font-inter selection:bg-[#00B4D8] dark:selection:bg-[#00E5FF] selection:text-white dark:selection:text-[#0B132B] overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Brands />
        <HowItWorks />
        <WhyChooseUs />
        <Experts />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
