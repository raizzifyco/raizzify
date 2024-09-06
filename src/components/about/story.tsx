import { Button } from "../ui/button"
import story1 from '../../../public/images/about/story1.png'
import story2 from '../../../public/images/about/story2.png'
import story3 from '../../../public/images/about/story3.png'
import story4 from '../../../public/images/about/story4.png'
import story5 from '../../../public/images/about/story5.png'
import Image from "next/image"
const Story = () => {
    return (
        <div id="our-story" className="bg-cardBgColor w-full flex items-center justify-center h-screen my-10 relative px-4">
            <div className="max-w-screen-md h-full flex items-center justify-center">
                <div className="flex text-center flex-col items-center gap-y-2">
                    <Button className="rounded-3xl px-10">
                        Our Story
                    </Button>
                    <h1 className="sm:text-[40px] text-[32px] leading-tight font-semibold">A Team Backed By IITians & ISBians</h1>
                    <p className="text-muted-foreground">At Raizzify, we revolutionise salon booking by making it seamless and stress-free. Born from the idea to simplify scheduling, our app connects clients with top-rated salons and skilled stylists through an easy-to-use interface. By offering real-time availability, personalised profiles, and secure payments, we support both clients and local businesses.
                    </p>
                    <p className="text-muted-foreground mt-4">Our commitment to enhancing the beauty experience ensures that self-care is just a tap away. Join us and discover the future of salon booking, where beauty meets convenience.
                    </p>
                </div>
            </div>
            
            <div className="lg:block hidden">
                <Image src={story1} alt="" className="absolute left-14 top-10 rounded-xl h-[300px] w-[260px] object-cover" />
            </div>
            <div className="lg:block hidden">
                <Image src={story2} alt="" className="absolute -right-10 -top-10 rounded-xl h-[350px] w-[350px] object-cover" />
            </div>
            <div className="lg:block hidden">
                <Image src={story3} alt="" className="absolute left-28 bottom-20 rounded-xl h-[180px] w-[150px] object-cover" />
            </div>
            <div className="lg:block hidden">
                <Image src={story4} alt="" className="absolute left-72 bottom-14 rounded-xl h-[100px] w-[120px] object-cover" />
            </div>
            <div className="lg:block hidden">
                <Image src={story5} alt="" className="absolute right-14 bottom-10 rounded-xl h-[180px] w-[260px] object-cover" />
            </div>
        </div>
    )
}
export default Story