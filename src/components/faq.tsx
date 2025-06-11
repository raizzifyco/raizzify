import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from './ui/button';
import pic1 from '../../public/images/pic1.png'
import pic2 from '../../public/images/pic2.png'
import pic3 from '../../public/images/pic3.png'
import Image from 'next/image';
import { Section, useToggle } from '@/styles/state/toggle-state';

const customerFaqs = [
    {
        title: "How do I join the platform?",
        content: "Joining the platform is as easy as it can get, you just need to download the Raizzify app from App Store/Play Store and then create an account.",
    },
    {
        title: "How do I select a specific stylist or barber?",
        content: "There is a custom booking option via which you could choose your preferred stylist or barber while scheduling an appointment.",
    },
    {
        title: "How do I reschedule my appointment and cancel booking?",
        content: "Although there is no option to reschedule an appointment yet, but you can still cancel your appointment and again schedule a new appointment.",
    },
    {
        title: "How do I find available discounts?",
        content: "Discounts could be intriguing, to get one just go through the feed and look for a shiny banner over the salon's thumbnail to know if a discount is available.",
    },
    {
        title: "Which payments methods are accepted?",
        content: "We use RazorPay as our payment gateway, which means any method as long as it exists is available, besides this you can always choose to pay via cash.",
    },
    {
        title: "How do I contact customer support?",
        content: "If you have any technical queries, drop us a mail at 'support@raizzify.com', our team usually replies back in 48 hours.",
    },
];

const ownerFaqs = [
    {
        title: "How do I join the platform?",
        content: "Joining the platform is as easy as it can get, you just need to download the Raizzify app from App Store/Play Store and then buy a membership.",
    },
    {
        title: "What are the benefits of the membership?",
        content: "Buying a membership gives you access to list your salon on the Raizzify platform so that it becomes visible to customers for online booking.",
    },
    {
        title: "How do I update the details of my salon?",
        content: "Once you are done with buying a membership, head over to the 'My Salon' section, and update the necessary fields according to your preference.",
    },
    {
        title: "How do I access my revenue reports?",
        content: "Revenue reports offer a detailed view of your salon's revenue. To access it, head over to the 'Revenue' section.",
    },
    {
        title: "How do I create a new discount offer?",
        content: "Discount offers help with attracting or retaining customers. To create new discounts, head over to the 'Discounts' section.",
    },
    {
        title: "How do I contact customer support?",
        content: "If you have any queries related to the product, drop us a mail at 'support@raizzify.com'. Our team usually replies within 48 hours.",
    },
];

const partnerFaqs = [
    {
        title: " How do I join the platform?",
        content: "Joining the platform is as easy as it can get, you just need to download the Raizzify app from App Store/Play Store and then buy a membership.",
    },
    {
        title: "What are the benefits of the membership?",
        content:(
    <>
      <p>As a Raizzify partner, you’ll gain:</p>
      <ul className="list-disc list-inside">
        <li>Access to 40+ business categories for cross-industry exposure</li>
        <li>Smart coupon integration to drive customer action and repeat visits</li>
        <li>Visibility within a network of 150+ trusted brands</li>
        <li>Tools to increase average order value through bill-linked rewards</li>
        <li>Deep business insights and analytics to optimize performance</li>
        <li>Recognition as a premium player in your city’s ecosystem</li>
      </ul>
    </>
  ),

    },
    {
        title: "How do I update the details of my salon?",
        content: "You can update your business information (timings, staff, photos, contact details, etc.) directly from your Partner Dashboard. For guided support, contact your assigned Raizzify Manager or reach out via the support chat.",
    },
    {
        title: "How do I access my revenue reports?",
        content: "Revenue and performance analytics are available in your dashboard under the ‘Reports & Insights’ tab. You can filter by date, offer type, and revisit frequency to get actionable data and track real-time results.",
    },
    {
        title: "How do I create a new discount offer?",
        content: "Go to your Partner Dashboard and select the ‘Create Offer’ section. Choose your offer type (e.g., percentage discount, freebie, cross-brand reward) and set the terms. You can also request assistance from our strategy team to optimize the offer.",
    },
    {
        title: "How do I contact customer support?",
        content: <>
        <p>You can reach us through</p>
        <li><a href="https://wa.me/7880096649?text=Hello">WhatsApp Support Line: [7880096649]</a></li>
        <li><a href="mailto:nikhil.raizada@raizzify.com">Email: support@raizzify.com </a></li>
        
        </>,
    },
];

const Faq = () => {

    const { section } = useToggle()
    const faqs = section === Section.user ? customerFaqs : section === Section.salon ? ownerFaqs :partnerFaqs
    
    return (
        <div className="my-14 flex flex-col items-center sm:px-14 px-6">
            <h1 className="font-bold md:text-[56px] text-[32px] text-center leading-tight">Frequently asked <br /> questions</h1>
            <p className="text-muted-foreground text-center mt-2">Everything you need to know about the product and billing.</p>

            <div className="md:w-1/2 w-full mt-10">
                <Accordion type="single" collapsible >
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className='font-semibold text-base text-left'>{faq.title}</AccordionTrigger>
                            <AccordionContent className='font-normal'>{faq.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className='my-10 w-full gap-y-2 bg-[#F7FEFF] rounded-lg p-6 flex flex-col items-center'>

                <div className='relative h-14 w-28'>
                    <Image src={pic1} width={50} height={50} alt='' className='absolute rounded-full border border-white right-16' />
                    <Image src={pic3} width={50} height={50} alt='' className='absolute rounded-full border border-white -right-2' />
                    <Image src={pic2} width={50} height={50} alt='' className='absolute rounded-full border border-white right-7' />
                </div>
                <h1 className='font-semibold text-lg'>Still have questions?</h1>
                <p className='text-center'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
               <Button className='mt-2'>
                  <a target="_blank" href="https://wa.me/7880096649?text=Hello">Get in touch</a>  
                </Button>
            </div>
        </div>
    );
};

export default Faq;
