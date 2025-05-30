import Image, { StaticImageData } from "next/image"

interface StartedCardProps {
    imageUrl: StaticImageData,
    title: string,
    description: string,
 
}
const StartedCard = ({ imageUrl, title, description}: StartedCardProps) => {
    return (
        <div className="flex items-center md:flex-row flex-col h-full  md:justify-between justify-center">
            <div className="md:w-1/3 w-full flex flex-col gap-y-2">
                {/* <div className="border border-primary rounded-[36px] p-2 bg-[#DEF4F8] w-fit">
                    <div className="border border-primary rounded-[40px] py-2 px-8 bg-[#B3E9F1]">
                        <p className="text-primary font-medium">{}</p>
                    </div>
                </div> */}
                <h2 className="font-semibold md:text-3xl sm:text-2xl text-xl">{title}</h2>
                <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="md:w-1/2 md:mt-0  mt-6 w-full h-full flex items-center justify-center overflow-hidden relative">
                <Image  src={imageUrl} objectFit="contain" className="" alt="" />
            </div>
        </div >
    )
}
export default StartedCard