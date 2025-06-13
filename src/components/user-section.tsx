import { userTestimonials } from "@/lib/testimonials-data"
import Experience from "./users/experience"
//import UserFeatures from "./users/user-features"
//import UserHero from "./users/user-hero"
import CustomerSay from "./users/customer-say"
import DownloadComp from "./users/user-download"
import Faq from "./faq"
import userDownload from '../../public/images/user/phone.png'
import qrAndroid from '../../public/images/user/user-android.png'
import qrIos from '../../public/images/user/user-ios.png'
import UserHero from "./customer/userhero"
import UserFeatures from "./customer/userfeature"
import Testimonials from "./user-testimonial/all-testimonials"
import UserBenefits from "./customer/userbenfits"
const UserSection = () => {
    return (
        <div className="font-manrope">
            <section id="user-hero">
                <UserHero />
            </section>
            <section id="features">
                <UserFeatures />
            </section>
            <section id="benefits">
                <UserBenefits />
            </section>
            
            <section id="experience">
                <Experience />
            </section>
            <section id="testimonials">
                {/* <CustomerSay testimonials={userTestimonials} /> */}
                <Testimonials/>

            </section>
            <section id="faqs">
                <Faq />
            </section>
            <section id="user-download">
                <DownloadComp qrImageAndroid={qrAndroid} qrImageIos={qrIos} gradientTitle="RAIZZIFY" image={userDownload} />
            </section>
        </div>)
}
export default UserSection