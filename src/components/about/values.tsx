import { Button } from "../ui/button"
import team from '../../../public/icons/team.png'
import heart from '../../../public/icons/heart.png'
import accelerate from '../../../public/icons/accelerate.png'
import smile from '../../../public/icons/smile.png'
import flag from '../../../public/icons/flag.png'
import thunder from '../../../public/icons/thunder.png'
import Image from "next/image"
const valueData = [
    {
        icon : team,
        title : "Care about our team",
        description : "Understand what matters to our employees. Give them what they need to do their best work."
    },
    {
        icon : heart,
        title : "Be excellent to each other",
        description : "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind."
    },
    {
        icon : accelerate,
        title : "Pride in what we do",
        description : "Value quality and integrity in everything we do. At all times. No exceptions."
    },
    {
        icon : smile,
        title : "Don't #!&$ the customer",
        description : "Understand customers' stated and unstated needs. Make them wildly successful."
    },
    {
        icon : flag,
        title : "Do the impossible",
        description : `Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"`
    },
    {
        icon : thunder,
        title : "Sweat the small stuff",
        description : "We believe the best products come from the best attention to detail. Sweat the small stuff."
    },
]
const Values = () => {
    return (
        <div id="how-we-work" className="bg-cardBgColor py-10 my-10 mt-20 md:px-16 sm:px-8 px-4">
            <div className="flex flex-col items-center gap-y-4">
                <Button className="rounded-3xl px-10">
                    Our Values
                </Button>
                <h2 className="sm:text-[40px] text-[32px] text-center font-semibold text-primaryTextColor">How we work at Raizzify</h2>
                <p className="text-muted-foreground sm:w-1/2 text-center">Our shared values keep us connected and guide us as one team.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12 mt-14">
                {
                    valueData.map((value,i) => (
                        <div key={i} className="flex flex-col gap-y-2 items-center text-center">
                            <Image src={value.icon} alt="" className="max-w-[40px]" />
                            <p className="text-lg font-semibold">{value.title}</p>
                            <p className="text-muted-foreground font-light text-sm w-[70%]">{value.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Values