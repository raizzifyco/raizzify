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

const CustomerSay = () => {
    const testimonials = [
        {
            review: "My salon just told me about this new Raizzify app. It looks really easy to use! I can't wait to try booking my next haircut on it. Being able to see all the free slots will be so helpful.",
            name: "Robin Singh"
        },
        {
            review: "My salon is starting to use Raizzify. They showed me how it works and it seems simple. I like that I'll be able to see all their services in the app. Excited to use it for my next appointment!",
            name: "Prateek Bansal"
        },
        {
            review: "Just heard about Raizzify at my last appointment. Being able to reschedule easily sounds amazing. And they mentioned I can see product recommendations too. Can't wait for my salon to start using it!",
            name: "Jai Prakashsingh"
        },
        {
            review: "My barber just told me about Raizzify. It sounds great! I'll be able to pick my favorite barber when booking and see how long each service takes. I'm not usually into apps, but this one seems really useful. Can't wait to try it!",
            name: "Naina Matani"
        },
        {
            review: "I'm not very good with technology, but this Raizzify app is really simple to use. I can book my usual appointment in just a few taps. It's much better than calling the salon and trying to explain what I want every time.",
            name: "Vinay Verma"
        },
    ];


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
