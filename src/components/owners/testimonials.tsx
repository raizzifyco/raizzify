import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from 'gsap'
import shahrukhImg from '../../../public/images/testimonials/Shahrukh.png'
import abhishekImg from '../../../public/images/testimonials/Abhishek.png'
import shwetaImg from '../../../public/images/testimonials/Shweta.png'
import TestimonialCard from "./testimonial-card";

const testimonials = [
    {
        imageUrl: abhishekImg, // Replace with the actual path or import
        name: "Mr. Abhishek",
        designation: "TRP Salon",
        review: "We just got Raizzify for our salon and we love it! It's easy to use for bookings and setting up services. We're excited that it might help us sell more products too. Can't wait to see how it grows our business!"
    },
    {
        imageUrl: shwetaImg, // Replace with the actual path or import
        name: "Ms. Shweta",
        designation: "Reflection Salon",
        review: "Our salon is pretty new, and we wanted something to help us stand out. Raizzify looks perfect for us! It's easy for appointments and lets customers buy our products too. We think this will really help our business grow!"
    },
    {
        imageUrl: shahrukhImg, // Replace with the actual path or import
        name: "Mr. Shahrukh",
        designation: "Clippers Cutters",
        review: "We just started Raizzify for our salon. It's easy to use, even for us who aren't great with computers. We love how it handles bookings and also let us sell our products on the app. Can't wait to see how our customers like it!"
    }
];
const Testimonials = () => {

    const t1 = useRef<gsap.core.Timeline | null>(null)
    useGSAP(() => {
        t1.current = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".test-container",
                    start: "-3% top",
                    end: "bottom bottom",
                    pin: ".container-wrapper",
                    scrub: true,
                    pinSpacing: false,
                }
            }
        )
        t1.current.from(".testimonials-heading", {
            opacity: 0,
            scale: 0.5,
            top: "2%"
        })
            .from(".test-wrapper", {
                opacity: 0,
                scale: 0.6,
                bottom: "-10%"
            })
            .to(".testimonial-3", {
                rotate: 12,
                yPercent: -100
            })
            .to(".testimonial-3", {
                rotate: 16,
                yPercent: -150
            })
            .to(".testimonial-3", {
                rotate: 12,
                yPercent: -300
            }, 'first')
            .to(".testimonial-2", {
                rotate: 12,
                yPercent: -100
            }, 'first')
            .to(".testimonial-2", {
                rotate: -12,
                yPercent: -150
            })
            .to(".testimonial-2", {
                rotate: -16,
                yPercent: -300
            }, 'second')
            .to(".testimonial-1", {
                rotate: -16,
                yPercent: -100
            }, 'second')
            .to(".testimonial-1", {
                rotate: -12,
                yPercent: -150
            })
            .to(".testimonial-1", {
                rotate: 0,
                yPercent: -300
            })

    })
    return (
        <div className="bg-cardBgColor h-[700vh] test-container relative py-14 mt-14">
            <div className="container-wrapper h-[100vh] relative">
                <h1 className="font-bold testimonials-heading md:text-[120px] sm:text-[80px] xs:text-[54px] text-[48px] text-center absolute top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2">Testimonials</h1>
                <div className="test-wrapper absolute top-[8%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {testimonials.map((testimonial, index) => {
                        let bgColorClass = "";
                        let rotateClass = "";
                        switch (index) {
                            case 0:
                                rotateClass = "rotate-6";
                                break;
                            case 1:
                                rotateClass = "";
                                break;
                            case 2:
                                rotateClass = "-rotate-6";
                                break;
                            default:
                                bgColorClass = "bg-white";
                        }
                        return (
                            <div key={index} className={`bg-white shadow-xl ${rotateClass} testimonial-${index + 1} absolute top-0 left-0 -translate-x-1/2 sm:w-[500px] w-[300px] sm:h-[250px] h-[250px] rounded-lg p-4`}>
                                <TestimonialCard
                                    imageUrl={testimonial.imageUrl}
                                    name={testimonial.name}
                                    designation={testimonial.designation}
                                    review={testimonial.review}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Testimonials