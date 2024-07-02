"use client";
import AboutHero from "@/components/about/about-hero";
import Careers from "@/components/about/careers";
import Story from "@/components/about/story";
import Team from "@/components/about/team";
import Values from "@/components/about/values";
import UserDownload from "@/components/users/user-download"
import "../../styles/app.css"
const AboutPage = () => {
    return (
        <div className="">
            <AboutHero />
            <Story />
            {/* <Team /> */}
            <Values />
            <Careers />
            <UserDownload />
        </div>
    )
}
export default AboutPage