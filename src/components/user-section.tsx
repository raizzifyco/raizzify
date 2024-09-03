import { userTestimonials } from "@/lib/testimonials-data"
import Experience from "./users/experience"
import UserFeatures from "./users/user-features"
import UserHero from "./users/user-hero"
import CustomerSay from "./users/customer-say"
import DownloadComp from "./users/user-download"
import Faq from "./faq"

const UserSection = () => {
    return (
        <div className="font-manrope">
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
                <CustomerSay testimonials={userTestimonials} />
            </section>
            <section id="faqs">
                <Faq />
            </section>
            <section id="user-download">
                <DownloadComp gradientTitle="RAIZZIFY" />
            </section>
        </div>)
}
export default UserSection