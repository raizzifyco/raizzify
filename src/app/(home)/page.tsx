"use client"
import Choose from "@/components/owners/choose";
import Hero from "@/components/hero";
import GetStarted from "@/components/owners/get-started";
import Pricing from "@/components/owners/pricing";
import Faq from "@/components/faq";
import Testimonials from "@/components/owners/testimonials";
import Download from "@/components/owners/download";

export default function Home() {

  return (
    <main className="home overflow-x-hidden">
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Choose />
      </section>
      <section id="benefits">
        <GetStarted />
      </section>
      {/* <section id="pricing">
        <Pricing />
      </section> */}
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faqs">
        <Faq />
      </section>
      <section id="download">
        <Download />
      </section>
    </main>
  );
}
