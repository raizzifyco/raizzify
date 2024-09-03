"use client";
import AboutHero from "@/components/about/about-hero";
import Careers from "@/components/about/careers";
import Story from "@/components/about/story";
// import Team from "@/components/about/team";
import Values from "@/components/about/values";
import UserDownload from "@/components/users/user-download"
import "../../styles/app.css"
import DownloadComp from "@/components/users/user-download";
const AboutPage = () => {
    return (
        <div className="overflow-x-hidden font-manrope">
            <AboutHero />
            <Story />
            {/* <Team /> */}
            <Values />
            <Careers />
            <DownloadComp gradientTitle="RAIZZIFY" />
        </div>
    )
}
export default AboutPage