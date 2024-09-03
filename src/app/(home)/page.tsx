"use client"
import Choose from "@/components/owners/choose";
import Hero from "@/components/hero";
import GetStarted from "@/components/owners/get-started";
import Pricing from "@/components/owners/pricing";
import Faq from "@/components/faq";
import Testimonials from "@/components/owners/testimonials";
import Download from "@/components/owners/download";
import CustomerSay from "@/components/users/customer-say";
import { ownerTestimonials } from "@/lib/testimonials-data";
import DownloadComp from "@/components/users/user-download";
import { useToggle } from "@/styles/state/toggle-state";
import UserSection from "@/components/user-section";
import OwnerSection from "@/components/owner-section";

export default function Home() {

  const { isToggled } = useToggle()
  return (
    isToggled ? <UserSection /> : <OwnerSection />
  );
}
