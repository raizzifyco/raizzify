import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import scrollImg1 from '../../../public/images/scroll-img1.png'
import scrollImg2 from '../../../public/images/scroll-img2.png';
import scrollImg3 from '../../../public/images/scroll-img3.png';
import { Button } from "../ui/button";
import Image from 'next/image'
const ResponsiveChoose = () => {
    const container = useRef<HTMLDivElement>(null);
    const items = useRef<HTMLDivElement[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    const itemsData = [
        {
            id: 1,
            title: "Your Shop The Internet",
            subtitle: "Sign up on Raizzify to quickly get your salon online and start enjoying digital benefits",
            img: scrollImg1

        },
        {
            id: 2,
            title: "Easily Manage Your Customer",
            subtitle: "Raizzify makes it easy to manage appointments, send reminders, and ensure your clients have a seamless experience every time",
            img: scrollImg2

        },
        {
            id: 3,
            title: "Attracts customers with discounts",
            subtitle: "Raizzify allows you to easily create and advertise special offers",
            img: scrollImg3

        },
    ];

    const handleMove = (direction: "left" | "right") => {
        const newIndex = direction === "right" ? currentIndex + 1 : currentIndex - 1;
        setCurrentIndex(newIndex);

        gsap.to(container.current, {
            x: -(newIndex * 100) + "%",
            duration: 0.5,
            ease: "power2.inOut",
        });
    };

    useEffect(() => {
        setIsPrevDisabled(currentIndex === 0);
        setIsNextDisabled(currentIndex === itemsData.length - 1);
    }, [currentIndex, itemsData.length]);

    return (
        <div className="md:hidden block relative py-10 overflow-hidden">
            <h1 className="text-center xs:text-[32px] text-[28px] font-semibold">Why Choose Raizzify?</h1>
            <div className="mt-6 relative w-full flex" ref={container}>
                {itemsData.map((item, index) => (
                    <div
                        key={item.id}
                        ref={el => {
                            if (el) {
                                items.current[index] = el;
                            }
                        }} className="start w-full flex-shrink-0 text-center px-6"
                        style={{ width: "100%", flexBasis: "100%" }}
                    >
                        <p className="font-bold text-[26px]">{item.title}</p>
                        <p className="text-muted-foreground font-medium">{item.subtitle}</p>
                        <div className="w-full flex items-center justify-center">
                            <Image src={item.img} alt="" className="mt-10 sm:w-full w-[320px]" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-[10%] gap-x-2">
                <Button onClick={() => handleMove("left")} className="shadow-md py-2 px-4 rounded-md bg-white border text-black text-sm" disabled={isPrevDisabled}>
                    <ChevronLeft size={20} />
                </Button>
                <Button onClick={() => handleMove("right")} className="shadow-md py-2 px-4 rounded-md bg-white border text-black text-sm" disabled={isNextDisabled}>
                    <ChevronRight size={20} />
                </Button>
            </div>
        </div>
    );
};

export default ResponsiveChoose;
