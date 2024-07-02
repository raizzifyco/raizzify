import Image, { StaticImageData } from "next/image";

interface MobileProps {
    image : StaticImageData;
}
const Mobile = ({image} : MobileProps) => {
    return (
        <div className="relative mx-auto border-primaryTextColor dark:border-primaryTextColor bg-primaryTextColor border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[120px] h-[18px] bg-black top-4 rounded-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <Image src={image} objectFit="contain" alt="" />
            </div>
        </div>
    )
}
export default Mobile