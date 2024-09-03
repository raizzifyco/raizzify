import hassleFree from '../../../public/images/user/features/hassle-free.png';
import aiFeatures from '../../../public/images/user/features/ai-features.png';
import connected from '../../../public/images/user/features/connected.png';
import cashVouchers from '../../../public/images/user/features/cash-vouchers.png';
import confidentiality from '../../../public/images/user/features/confidentiality.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import '../../styles/app.css'
import { useGSAP } from '@gsap/react';

const leftItems = [
    "Hassle-Free",
    "AI Features",
    "Cash Vouchers",
    "Confidentiality is key",
    "Stay Connected",
];

const rightItems = [
    {
        image: hassleFree,
        heading: "Hassle-Free",
        title: "Hassle-free Appointment booking",
        subtitle: "Book your salon appointments effortlessly through our app. No more waiting on calls or long queues."
    },
    {
        image: aiFeatures,
        heading: "AI Features",
        title: "Try-On AI Feature",
        subtitle: "Use our AI feature to virtually try on hairstyles, hair colours, makeup and lipsticks before your next big event."
    },
    {
        image: cashVouchers,
        heading: "Cash- Vouchers",
        title: "Earn Cash Vouchers",
        subtitle: "Get cash vouchers for each booking. Redeem them locally for great discounts and offers."
    },
    {
        image: confidentiality,
        heading: "Confidentiality is Key",
        title: "Respecting Salon Etiquette",
        subtitle: "Discreetly share your concerns with the stylist, ensuring your conversation remains confidential and out of earshot of others in the salon."
    },
    {
        image: connected,
        heading: "Stay Connected",
        title: "Stay Connected With Your Go-To-Salon",
        subtitle: "Keep track of what’s going on in your salon, is there a new hairstyle trend, or is your favourite stylist free for a cut."
    },
];

const UserFeatures = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useGSAP(() => {
        // Pin the left side
        ScrollTrigger.create({
            trigger: ".features-trigger",
            start: "top 10%",
            end: "bottom bottom",
            pin: ".left",
        });

        // Create ScrollTriggers for each right item
        rightItems.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: `.right-item-${index}`,
                start: "top 70%",
                end: "bottom 70%",
                onEnter: () => setActiveIndex(index),
                onLeaveBack: () => setActiveIndex(index - 1),
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="px-4 sm:px-6 md:px-8 z-[100] lg:px-32 py-16">
            <div className="text-center">
                <h1 className="font-medium md:text-[56px] text-[32px]">Key Features</h1>
                <p className='text-base'>Explore our curated lists and stay tuned with the <br className='sm:block hidden' />
                    latest programming news from all over the world.</p>
            </div>

            <div className="flex items-start mt-10 features-trigger">
                <div className="left sm:w-[32%] py-16 sm:flex hidden flex-col gap-y-4">
                    {leftItems.map((item, i) => (
                        <div key={i} className='flex items-center gap-x-2'>
                            <div className={cn(`w-2 h-2 rounded-full`, activeIndex === i && "bg-primary")}>

                            </div>
                            <p className={`left-${i} ${activeIndex === i ? 'text-primaryTextColor' : 'text-muted-foreground'}`} key={i}>
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="right sm:w-[68%] w-full flex flex-col gap-y-6">
                    {rightItems.map((item, i) => (
                        <div key={i} className={`border-2 hover:border-primary bg-cardBgColor relative sm:p-8 px-4 py-4 rounded-xl sm:h-[90vh] right-item-${i}`}>
                            <h2 className='sm:text-[32px] text-xl font-medium text-primaryTextColor'>{item.heading}</h2>
                            <div className='relative sm:h-[70%] w-full flex items-center justify-center sm:mt-6 mt-4 sm:overflow-hidden'>
                                <Image src={item.image} className='sm:absolute xl:top-0 bottom-0 left-20 right-20 lg:-translate-x-0 sm:-translate-x-10 w-[80%]' alt='' />
                                <div className='img-blur absolute bottom-0 h-10 w-full'></div>
                            </div>
                            <div className='flex items-start justify-between'>
                                <div className='xl:w-1/2 lg:w-[80%] gap-y-2 flex flex-col'>
                                    <h3 className='font-bold text-xl text-primaryTextColor'>{item.title}</h3>
                                    <p className='font-light text-muted-foreground text-sm'>{item.subtitle}</p>
                                </div>
                                <p className='text-muted-foreground'>*T&C applied</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserFeatures;
