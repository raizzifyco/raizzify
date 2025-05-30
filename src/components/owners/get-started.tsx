import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import img1 from '../../../public/images/partner/Benefit_1.svg'
import img2 from '../../../public/images/partner/Benefit_2.svg'
import img3 from '../../../public/images/partner/Benefit_3.svg'
import StartedCard from "./started-card"

const cardData = [
    {
        imageUrl: img3,
        
        title: "Get Deep Business Insights",
        description: "See how your customers behave and what keeps them coming back.Make smarter decisions with complete business analytics.",
        top: "top-28"
    },
    {
        imageUrl: img2,
  
        title: "Track Discount and Revisit Performance",
        description: "Know what works—analyze how your discounts are converting.Measure the impact of revisit offers and optimize for results.",
        top: "top-20"
    },
    {
        imageUrl: img1,
     
        title: "Join a 150+ Brand Network",
        description: "Become part of a trusted, city-wide network of premium businesses.Boost your visibility and climb to the top of your city’s brand list.",
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
                            className={`card-${index + 1} w-full h-[70%] bg-gradient-to-br from-[#59E5CE] to-[#FCFDF8]  shadow-lg absolute ${card.top} left-0 right-0 rounded-xl px-14`}
                        >
                            <StartedCard
                                imageUrl={card.imageUrl}
                               
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
                                <StartedCard imageUrl={card.imageUrl}  title={card.title} description={card.description} />
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}
export default GetStarted