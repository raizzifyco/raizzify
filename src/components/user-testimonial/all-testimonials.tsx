import { TestimonialGrid } from "@/components/testinomials/testinomials-grid";
import avatarImg from "../../../public/images/pic1.png";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I got a free haircut coupon after paying at Suto Café!",
      name: "Ajay Patidar",
      username: "",
      avatarSrc: avatarImg,
      companyLogo: (
        <Image
          src={logo}
          alt="Company Logo"
          className="h-6 w-6 rounded-full"
          width={24}
          height={24}
        ></Image>
      ),
      size: "large" as const,
      avatarPosition: "top" as const,
      color: "rose",
    },
    {
      quote:
        "Grabbed a car wash deal just by paying at Harmony Salon.",
      name: " Saurabh ",
      username: "",
      avatarSrc: avatarImg,
      size: "small" as const,
      color: "indigo",
    },
    {
      quote:
        "Paid at a laundry and got free drinks coupons — no kidding!",
      name: "Ritu",
      username: "",
      avatarSrc: avatarImg,
      size: "medium" as const,
      color: "indigo",
    },
    {
      quote:
        "Applied a gym coupon and ended up with an Archie’s gift voucher!",
      name: "Priya",
      username: "",
      avatarSrc: avatarImg,
      size: "small" as const,
      color: "emerald",
    },
    
  ];

  return <TestimonialGrid testimonials={testimonials} />;
}
