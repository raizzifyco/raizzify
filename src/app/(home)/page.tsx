"use client"
import { useToggle } from "@/styles/state/toggle-state";
import UserSection from "@/components/user-section";
import OwnerSection from "@/components/owner-section";

export default function Home() {

  const { isToggled } = useToggle()
  return (
    isToggled ? <UserSection /> : <OwnerSection />
  );
}
