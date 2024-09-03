import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1240 },
        items: 4,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1240, min: 640 },
        items: 2,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        partialVisibilityGutter: 10
    },
};

type Testimonials = {
    name: string;
    designation?: string;
    review: string;
}
interface CustomerSayProps {
    testimonials: Array<Testimonials>
}
const CustomerSay = ({ testimonials }: CustomerSayProps) => {

    return (
        <div className='flex flex-col gap-y-6 py-16 px-4 sm:px-6 md:px-8 z-[100] lg:px-14'>
            <h1 className='md:text-[56px] xs:text-[32px] text-[28px] text-center font-medium text-primaryTextColor'>What Our Customers Say About Us?</h1>
            <Carousel
                responsive={responsive}
                infinite={true} // Enable infinite looping
                autoPlay={true} // Enable autoplay
                autoPlaySpeed={5000} // Set autoplay interval to 5 seconds
                showDots={false} // Hide navigation dots
                arrows={false}
                slidesToSlide={1}
            >
                {testimonials.map((testimonial, i) => (
                    <div key={i} className='bg-cardBgColor flex flex-col justify-between gap-y-8 p-8 text-primaryTextColor mx-4 rounded-lg h-[320px]'>
                        <p className='font-medium'>{testimonial.review}</p>
                        <p className='font-bold text-lg'>{testimonial.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CustomerSay;
