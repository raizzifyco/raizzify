import hero from '../../public/images/owners/owner-hero.png'
import { Button } from "./ui/button"
import marquee1 from '../../public/images/owners/marquee/marquee1.png'
import marquee2 from '../../public/images/owners/marquee/marquee2.png'
import marquee3 from '../../public/images/owners/marquee/marquee3.png'
import marquee4 from '../../public/images/owners/marquee/marquee4.png'
import marquee5 from '../../public/images/owners/marquee/marquee5.png'
import marquee6 from '../../public/images/owners/marquee/marquee6.png'
import marquee7 from '../../public/images/owners/marquee/marquee7.png'
import marquee8 from '../../public/images/owners/marquee/marquee8.png'
import marquee9 from '../../public/images/owners/marquee/marquee9.png'


import Image from "next/image"
import '../styles/app.css'
import Switch from "./switch"
import gsap from '@/lib/gsap-setup'
import { useGSAP } from '@gsap/react'
const firstMarq = [
    {
        imageUrl: marquee4,
        text: "Manage Multiple Salons at one Place"
    },
    {
        imageUrl: marquee5,
        text: "Digitalize Your Shop"
    },
    {
        imageUrl: marquee6,
        text: "Track Customer Patterns"
    },
    {
        imageUrl: marquee7,
        text: "Give Customers Discounts"
    },
    {
        imageUrl: marquee8,
        text: "Manage Revenue"
    },
    {
        imageUrl: marquee9,
        text: "Track Your Expenses & Make Profits"
    },
    {
        imageUrl: marquee8,
        text: "Manage Revenue"
    },
]

const secondMarq = [
    {
        imageUrl: marquee1,
        text: "Manage Your Inventory"
    },
    {
        imageUrl: marquee2,
        text: "Get  Pre-Bookings & Grow your Business"
    },
    {
        imageUrl: marquee3,
        text: "Onboard Customers Manually"
    },
    {
        imageUrl: marquee6,
        text: "Track Customer Patterns"
    },
    {
        imageUrl: marquee7,
        text: "Give Customers Discounts"
    },
    {
        imageUrl: marquee4,
        text: "Manage Your Staff"
    },
]

const Hero = () => {

    useGSAP(() => {
        gsap.from(".hero", {
            xPercent: 100
        })
    })
    const handleScroll = () => {
        gsap.to(window, { duration: 0.5, scrollTo: { y: 400 } })
    }
    const handleGetStarted = () => {
        gsap.to(window, { duration: 1, scrollTo: `#faqs` });
    }
    return (
        <div className="flex hero flex-col justify-center items-center py-10">
            <Switch />
            <div className="flex flex-col items-center whitespace-nowrap w-full gap-y-8">
                <div className="font-bold lg:text-[56px] sm:text-[38px] xs:text-[30px] text-[26px] md:px-0 px-6 md:w-3/4 w-full text-center md:leading-relaxed">
                    <h1 className="text-center tracking-tight">The all-in-one platform</h1>
                    <p className="text-center sm:block flex items-center flex-col tracking-tight">
                        purpose-built for
                        <span className="bg-primary px-2 rounded-md text-white ml-4 leading-tight sm:inline-block block w-fit">Salon Owners</span>
                    </p>
                </div>
                <div className="sm:flex hidden items-center gap-x-6">
                    <Button onClick={handleGetStarted} variant={'default'} className="w-[200px] py-6 font-semibold">
                        Get Started
                    </Button>
                    <Button onClick={handleScroll} variant={'outline'} className="w-[200px] py-6 font-semibold">
                        Learn More
                    </Button>
                </div>
            </div>

            <div className="mt-10 relative w-full">

                <div className="absolute z-[-1] flex items-center gap-x-4 top-[20%] left-10 right-10 overflow-hidden">
                    <div className="marquee">
                        <div className="marquee-content flex gap-x-4 items-center">
                            {firstMarq.map((item, i) => (
                                <div key={i} className="bg-white p-4 border border-[#00A210] rounded-md shadow-md">
                                    <Image src={item.imageUrl} className='w-20 h-20 object-contain' alt="" />
                                    <p className="font-semibold">{item.text}</p>
                                </div>
                            ))}
                            {firstMarq.map((item, i) => (
                                <div key={`dup-${i}`} className="bg-white p-4 border border-[#00A210] rounded-md shadow-md">
                                    <Image src={item.imageUrl} className='w-20 h-20 object-contain' alt="" />
                                    <p className="font-semibold">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex z-[-1] items-center gap-x-4 absolute top-[50%] left-10 right-10 overflow-hidden">
                    <div className="marquee">
                        <div className="marquee-content-second flex gap-x-4 items-center">
                            {
                                secondMarq.map((item, i) => (
                                    <div key={i} className="bg-white p-4 border border-[#00A210] rounded-md shadow-md">
                                        <Image src={item.imageUrl} className='w-20 h-20 object-contain' alt="" />
                                        <p className="font-semibold">{item.text}</p>
                                    </div>
                                ))
                            }
                            {
                                secondMarq.map((item, i) => (
                                    <div key={`dup2-${i}`} className="bg-white p-4 border border-[#00A210] rounded-md shadow-md">
                                        <Image src={item.imageUrl} className='w-20 h-20 object-contain' alt="" />
                                        <p className="font-semibold">{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="gradient-left">

                </div>
                <div className="gradient-right">

                </div>
                <Image src={hero} className='w-[320px] h-[600px] mx-auto ' alt='' />

                <div className="sm:hidden flex flex-col items-center gap-y-6 mt-6">
                    <Button onClick={handleGetStarted} variant={'default'} className="sm:w-[200px] w-[300px] py-6">
                        Get Started
                    </Button>
                    <Button variant={'outline'} className="sm:w-[200px] w-[300px] py-6">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Hero