import Switch from "../switch"
import '../../styles/app.css'
import { Button } from "../ui/button"
import img from '../../../public/images/user/user-hero.png'
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from '@/lib/gsap-setup'

const UserHero = () => {

    useGSAP(() => {
        gsap.from(".hero", {
            xPercent: -100
        })
    })

    const handleGetStarted = () => {
        gsap.to(window, { duration: 1, scrollTo: `#faqs` });
    }
    return (
        <div className="flex hero flex-col justify-center items-center py-10 px-4">
            <Switch />

            <div className="mt-10 relative w-full">
                <h1 className="absolute main-grad left-1/2 md:top-1/2 sm:top-[10%] top-[8%] -translate-x-1/2 -translate-y-1/2 lg:text-[220px] md:text-[160px] sm:text-[120px] xs:text-[88px] text-[70px] font-bold">RAIZZIFY</h1>
                <div className="relative sm:w-[350px] xs:w-[320px] w-[320px] h-full mx-auto md:mt-0 sm:mt-[16%] xs:mt-[18%] mt-[22%]">
                    <Image src={img} alt="RAIZZIFY Image" />
                </div>
            </div>

            <div className="flex flex-col items-center text-center text-muted-foreground mt-10">
                <p className="md:block hidden">Shorten your salon wait times, get a glimpse on how you would look after </p>
                <p className="md:block hidden">a haircut and even earn vouchers while you’re doing so.</p>

                <p className="md:hidden block">
                    Shorten your salon wait times, get a glimpse on how you would look after a haircut and even earn vouchers while you’re doing so.
                </p>
                <div className="flex items-center sm:flex-row flex-col gap-6 mt-8">
                    <Button onClick={handleGetStarted} variant={'default'} className="sm:w-[200px] w-[300px] py-6 font-semibold">
                        Get Started
                    </Button>
                    <Button variant={'outline'} className="sm:w-[200px] w-[300px] py-6 font-semibold">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default UserHero