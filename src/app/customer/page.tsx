"use client"
import Faq from "@/components/faq"
import CustomerSay from "@/components/users/customer-say"
import Experience from "@/components/users/experience"
import UserDownload from "@/components/users/user-download"
import UserFeatures from "@/components/users/user-features"
import UserHero from "@/components/users/user-hero"

const CustomerPage = () => {
    return (
        <div>
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
        </div>
    )
}
export default CustomerPage