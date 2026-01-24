import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { SpecialOffer } from "@/components/special-offer";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function HomePage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <Intro />
      <SpecialOffer />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
