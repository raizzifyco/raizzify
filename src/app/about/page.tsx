"use client";
import AboutHero from "@/components/about/about-hero";
import Careers from "@/components/about/careers";
import Story from "@/components/about/story";
// import Team from "@/components/about/team";
import Values from "@/components/about/values";
import "../../styles/app.css"
import DownloadComp from "@/components/users/user-download";
import userDownload from '../../../public/images/user/user-download.png'
import qrAndroid from '../../../public/images/user/user-android.png'
import qrIos from '../../../public/images/user/user-ios.png'
const AboutPage = () => {
    return (
        <div className="overflow-x-hidden overflow-y-hidden font-manrope">
            <AboutHero />
            <Story />
            {/* <Team /> */}
            <Values />
            <Careers />
            <section id="user-download">
                <DownloadComp gradientTitle="RAIZZIFY" image={userDownload} qrImageAndroid={qrAndroid} qrImageIos={qrIos} />
            </section>
        </div>
    )
}
export default AboutPage