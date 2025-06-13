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
                    <p className="text-muted-foreground">Raizzify, founded by a team of IITians and ISBians, is an innovation-driven platform on a mission to empower local businesses through intelligent customer engagement, digital visibility, and data-driven growth.


                    </p>
                    <p className="text-muted-foreground mt-4">We are transforming how local brands connect with their customers by creating value at every purchase and offering tools for sustainable business growth.


                    </p>
                    <p className="text-muted-foreground mt-4">A curated network of 40+ premium businesses (Salons, Cafés, Boutiques, Laundry, Car Wash, Gifts, Mens wear, Saree shop, Sweet shop, Gyms, Pathology, Medicals, Cinemas  etc.), offering consumers exclusive perks and coupons while driving footfall, brand recognition, and loyalty for businesses.


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