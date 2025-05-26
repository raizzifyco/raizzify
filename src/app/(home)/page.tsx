"use client";
import { useToggle, Section } from "@/styles/state/toggle-state";
import UserSection from "@/components/user-section";
import OwnerSection from "@/components/owner-section";
import PartnerSection from "@/components/partner-section";

export default function Home() {
  const { section } = useToggle();

  switch (section) {
    case Section.user:
      return <UserSection />;
    case Section.salon:
      return <OwnerSection />;
    case Section.partner:
      return <PartnerSection />;
    default:
      return null;
  }
}
