"use client"
import Choose from "@/components/owners/choose";
import Hero from "@/components/hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import GetStarted from "@/components/owners/get-started";
import Pricing from "@/components/owners/pricing";
import Faq from "@/components/faq";
import Testimonials from "@/components/owners/testimonials";
import Download from "@/components/owners/download";
import { useToggle } from "@/state/toggle-state";
import UserHero from "@/components/users/user-hero";
import Experience from "@/components/users/experience";
import UserDownload from "@/components/users/user-download";
import CustomerSay from "@/components/users/customer-say";
import UserFeatures from "@/components/users/user-features";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export default function Home() {

  const { isToggled } = useToggle();
  return (
    <main className="">
      <div className="">
        {
          !isToggled ?
            <>
              <section id="hero">
                <Hero />
              </section>
              <section id="features">
                <Choose />
              </section>
              <section id="benefits">
                <GetStarted />
              </section>
              <section id="pricing">
                <Pricing />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <section id="faqs">
                <Faq />
              </section>
              <section id="download">
                <Download />
              </section>
            </> :
            <>
              <section id="user-hero">
                <UserHero />
              </section>
              <section id="features">
                <UserFeatures />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="testimonials">
                <CustomerSay />
              </section>
              <section id="faqs">
                <Faq />
              </section>
              <section id="user-download">
                <UserDownload />
              </section>
            </>
        }
      </div>
    </main>
  );
}
