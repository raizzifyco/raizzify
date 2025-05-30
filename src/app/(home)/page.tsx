"use client";
import { useToggle, Section } from "@/styles/state/toggle-state";
import UserSection from "@/components/user-section";
import OwnerSection from "@/components/owner-section";
import PartnerSection from "@/components/partner-section";
import ScreenOne from "@/components/screens/s1";
import ScreenTwo from "@/components/screens/s2";
import ScreenThree from "@/components/screens/s3";
import ScreenFour from "@/components/screens/s4";
import Image from "next/image";
import Whatsapp from "../../../public/images/partner/whatsapp.svg";

export default function Home() {
  const { section } = useToggle();

  //UNCOMMENT TO SEE NEW SCREENS
  // return (
  //   <div>
  //     <ScreenOne />
  //     <ScreenTwo />
  //     <ScreenThree />
  //     <ScreenFour />
  //   </div>
  // );
  const renderMain = () => {
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
  };
  return (
    <>
      {renderMain()}
      <div className="fixed z-10 right-0 m-3 bottom-0 w-20">
        <a target="_blank" href="https://wa.me/7880096649?text=Hello">
          <Image alt={"Hero4"} src={Whatsapp} />
        </a>
      </div>
    </>
  );
}
