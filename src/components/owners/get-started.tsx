import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import img1 from '../../../public/images/start-img1.png'
import img2 from '../../../public/images/start-img2.png'
import img3 from '../../../public/images/start-img3.png'
import StartedCard from "./started-card"

const cardData = [
    {
        imageUrl: img3,
        heading: "Coins",
        title: "Help Your Customers Earn Cash Benefits",
        description: "For each service taken by the customer at your salon through the app, we provide them vouchers which they can redeem with local partners.",
        top: "top-28"
    },
    {
        imageUrl: img2,
        heading: "Experience",
        title: "Give Your Customers An Experience",
        description: "Enhance customer visits with personalized touches and exceptional care, making the salon they are familiar with - more accessible.",
        top: "top-20"
    },
    {
        imageUrl: img1,
        heading: "Growth",
        title: "Takeover Your Competitors",
        description: "Stay ahead with powerful features designed to grow your salon, tools to attract new clients and keep them coming back.",
        top: "top-10"
    }
];
const GetStarted = () => {

    const t1 = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        t1.current = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".card-wrapper",
                    start: "20 20",
                    // end: "+=600",
                    scrub: 1,
                    pin: true,
                }
            }
        )

        t1.current.to(".card-3", {
            top: "-65%"
        }).to(".card-2", {
            top: "-60%"
        }, "a").to(".card-3", {
            top: "-130%"
        }, "a")
    })
    return (
        <>
            <div className="md:flex hidden flex-col h-[220vh] relative py-10 px-14 mt-32">
                <h1 className="text-center font-semibold md:text-[56px] text-[32px]">Know the Benefits</h1>

                <div className="card-wrapper h-[100vh] px-14 mt-4 w-full relative">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`card-${index + 1} w-full h-[70%] bg-cardBgColor shadow-lg absolute ${card.top} left-0 right-0 rounded-xl px-14`}
                        >
                            <StartedCard
                                imageUrl={card.imageUrl}
                                heading={card.heading}
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden flex flex-col sm:px-8 px-4">
                <h1 className="text-center text-[32px] font-medium">Know the benefits</h1>

                <div className="flex flex-col-reverse gap-y-8 mt-6">
                    {
                        cardData.map((card, i) => (
                            <div key={i} className="px-6 py-6 bg-cardBgColor rounded-lg">
                                <StartedCard imageUrl={card.imageUrl} heading={card.heading} title={card.title} description={card.description} />
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}
export default GetStarted