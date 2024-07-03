import scrollImg1 from '../../../public/images/owners/choose/scroll-img1.png'
import scrollImg2 from '../../../public/images/owners/choose/scroll-img2.png'
import scrollImg3 from '../../../public/images/owners/choose/scroll-img3.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
import { useState, useRef } from "react"
import ResponsiveChoose from "./responsive-choose"
import Image, { StaticImageData } from "next/image"
import gsap from '@/lib/gsap-setup'

const contentData = [
    { id: "content1", title: "Your shop the Internet", description: "Sign up on Raizzify to quickly get your salon online and start enjoying digital benefits.", image: scrollImg1 },
    { id: "content2", title: "Easily Manage Your Customers", description: "Raizzify makes it easy to manage appointments, send reminders, and ensure your clients have a seamless experience every time.", image: scrollImg2 },
    { id: "content3", title: "Attracts customers with discounts", description: "Raizzify allows you to easily create and advertise special offers", image: scrollImg3 },
];

const Choose = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const pinnedImageRef = useRef<HTMLImageElement | null>(null);

    useGSAP(() => {
        // Pin the left side
        ScrollTrigger.create({
            trigger: ".choose-trigger",
            start: "top -12%",
            end: "bottom bottom",
            pin: ".pin",
            pinSpacing: false,
        });

        // Create ScrollTriggers for each right item
        contentData.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: `.content-${index}`,
                start: "top bottom",
                end: "bottom 10%",
                scrub: 1,
                onEnter: () => {
                    setActiveIndex(index);
                    if(index != 0){
                        animateImageChange(item.image);
                    }
                },
                onLeaveBack: () => {
                    if (index > 0) {
                        setActiveIndex(index - 1);
                        animateImageChange(contentData[index - 1].image);
                    }
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const animateImageChange = (newImage: StaticImageData) => {
        const pinImgElement = pinnedImageRef.current;
        gsap.to(pinImgElement, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                pinImgElement?.setAttribute('src', newImage.src); // Use setAttribute to set src
                gsap.to(pinImgElement, {
                    opacity: 1,
                });
            },
        });
    };


    return (
        <>
            <div className="md:block hidden relative choose-trigger w-full h-[450vh] overflow-x-hidden mt-16">
                <h1 className="text-center md:text-[56px] text-[32px] font-semibold">Why Choose Raizzify?</h1>

                <div className={`pin flex justify-center z-[10] items-center mt-16`}>
                    <Image
                        ref={pinnedImageRef}
                        src={contentData[activeIndex].image}
                        alt="Pinned"
                        className="z-10 max-w-[320px]"
                    />
                </div>
                <div className="w-full absolute top-10 bottom-10 overflow-hidden">
                    {contentData.map((content, i) => (
                        <div
                            key={content.id}
                            className={`w-[25%] content-${i} flex flex-col gap-y-2 items-start absolute ${i % 2 === 0 ? "left-20" : "right-20"} text-primaryTextColor`}
                            style={{ top: `${(i * 60) / 2 + 25}%` }}
                        >
                            <h1 className="font-bold text-3xl">{content.title}</h1>
                            <p className="text-muted-foreground">{content.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ResponsiveChoose />
        </>
    );
}

export default Choose;
