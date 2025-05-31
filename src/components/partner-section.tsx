import { ownerTestimonials } from "@/lib/testimonials-data";
import Choose from "./owners/choose";
import GetStarted from "./owners/get-started";
import CustomerSay from "./users/customer-say";
import Faq from "./faq";
import DownloadComp from "./users/user-download";
import ownerDownload from "../../public/images/owners/owner-download.png";
import qrAndroid from "../../public/images/owners/owner-android.png";
import qrIos from "../../public/images/owners/owner-ios.png";
import Testimonials from "./testinomials/all-testinomials";
import Hero from "./partner/hero";
import Features from "./partner/features";
// 'import Benefit  from "./partner/benefit";
import Image from "next/image";

const PartnerSection = () => {
  return (
    <main className="home overflow-x-hidden overflow-y-hidden font-manrope">
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="benefits">
        <GetStarted />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faqs">
        <Faq />
      </section>
      <section id="download">
        <DownloadComp
          qrImageAndroid={qrAndroid}
          qrImageIos={qrIos}
          gradientTitle={"RAIZZIFY BUSINESS"}
          image={ownerDownload}
        />
      </section>
    </main>
  );
};
export default PartnerSection;
