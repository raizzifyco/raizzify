import { ownerTestimonials } from "@/lib/testimonials-data"
import Hero from "./hero"
import Choose from "./owners/choose"
import GetStarted from "./owners/get-started"
import CustomerSay from "./users/customer-say"
import Faq from "./faq"
import DownloadComp from "./users/user-download"
import ownerDownload from "../../public/images/owners/owner-download.png"
import qrAndroid from '../../public/images/owners/owner-android.png'
import qrIos from '../../public/images/owners/owner-ios.png'
const OwnerSection = () => {
    return (
        <main className=" overflow-x-hidden overflow-y-hidden font-manrope">
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
                <CustomerSay testimonials={ownerTestimonials} />
            </section>
            <section id="faqs">
                <Faq />
            </section>
            
            <section id="download">
                <DownloadComp qrImageAndroid={qrAndroid} qrImageIos={qrIos} gradientTitle={"RAIZZIFY BUSINESS"} image={ownerDownload} />
            </section>
        </main>)
}
export default OwnerSection