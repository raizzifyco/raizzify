import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"
import career1 from '../../../public/images/about/career1.jpeg'
import career2 from '../../../public/images/about/career2.png'
import career3 from '../../../public/images/about/career3.png'
import career4 from '../../../public/images/about/career4.png'
import career5 from '../../../public/images/about/career5.png'
import Image from "next/image"
import Link from "next/link"

const Careers = () => {
    return (
        <div id="careers" className="md:px-16 sm:px-8 px-4 min-h-screen flex items-center justify-center py-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8">
                <div className="flex flex-col items-start gap-y-4">
                    <Button className="rounded-3xl px-10">
                        Careers
                    </Button>
                    <h2 className="md:text-[40px] text-[32px] font-semibold text-primaryTextColor leading-tight">We’re looking for talented people</h2>
                    <h2 className="text-muted-foreground">We’re a 100% remote team spread all across the world. Join us!</h2>
                    <p className="text-muted-foreground">Raizzify is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team all around the world.</p>
                    <p className="text-muted-foreground">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work. Read more about </p>

                    <Link href={`https://wellfound.com/raizzifyco`} target="_blank">
                        <Button className="mt-6">
                            Open Position
                            <ArrowUpRight size={20} className="ml-2" />
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    <div className="flex items-end gap-x-4">
                        <Image src={career1} alt="" className="xs:w-[160px] w-1/2 h-[160px] object-cover" />
                        <Image src={career2} alt="" className="xs:w-[160px] w-1/2 h-[240px] object-cover" />
                    </div>
                    <div className="flex items-start gap-x-4">
                        <Image src={career3} alt="" className="xs:w-[192px] w-1/2 h-[192px] xs:object-contain object-cover" />
                        <Image src={career4} alt="" className="xs:w-[192px] w-1/2 h-[240px] xs:object-contain object-cover" />
                        <Image src={career5} alt="" className="w-[192px] md:block hidden h-[160px] object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Careers