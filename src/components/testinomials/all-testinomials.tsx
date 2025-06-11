import { TestimonialGrid } from "@/components/testinomials/testinomials-grid";
import avatarImg from "../../../public/images/pic1.png";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "With Raizzify, we've tapped into an audience we never expected—from gym-goers to salon customers. Their smart coupons have brought in more footfall. It’s like cross-marketing made effortless.",
      name: "Suto Cafe",
      username: "@suto_cafe",
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
        "Eyewear is a need-based product, But with Raizzify, new customers attract—either to redeem rewards or earn new ones.",
      name: " Monica Opto Hub",
      username: "monica_O_hub",
      avatarSrc: avatarImg,
      size: "small" as const,
      color: "indigo",
    },
    {
      quote:
        "Being part of a network of 150+ brands has boosted our credibility. People now see Raghavam not just as a standalone store, but part of a bigger, trusted ecosystem—and that makes a huge difference in how they choose to shop.",
      name: "Raghavam",
      username: "@raghavam",
      avatarSrc: avatarImg,
      size: "medium" as const,
      color: "indigo",
    },
    {
      quote:
        "We’ve seen a spike in our average bill value. Customers now aim for higher spends just to unlock better coupons. Raizzify gamifies the experience in a way that benefits both the customer and us—it’s brilliant!",
      name: "SIS BRO SALON",
      username: "sis&bro",
      avatarSrc: avatarImg,
      size: "small" as const,
      color: "emerald",
    },
    {
      quote:
        "Raizzify’s revisit performance tracker gives us clarity—what’s working, what’s not, and how we can get better.",
      name: "AURA SALON",
      username: "aura_salon",
      avatarSrc: avatarImg,
      size: "small" as const,
      color: "slate",
    },
    {
      quote:
        "Raizzify has changed the way we retain members. When people get rewards they can use at their favorite cafes or salons just by joining our gym, it creates real value. We’re not just selling fitness anymore—we’re offering a lifestyle.",
      name: "Jerai Fitness – The Fitness Lounge",
      username: "fitness",
      avatarSrc: avatarImg,
      size: "large" as const,
      color: "sky",
    },
    {
      quote:
       "Earlier, our promotions ended with a bill. Now, they continue as an experience. Raizzify’s smart coupons keep our brand alive in the customer’s mind—even after they walk out of our store. That’s powerful.",
      name: "Bake n Shake",
      username: "bake_n_shake",
      avatarSrc: avatarImg,
      size: "large" as const,
      color: "sky",
    },
   {
      quote:
       "We didn’t think a car wash business could benefit from something like Raizzify—but we were wrong. It's helped turn a routine service into something people actually look forward to.",
      name: "High Octane Car Wash",
      username: "car_wash",
      avatarSrc: avatarImg,
      size: "small" as const,
      color: "slate",
    },
  ];

  return <TestimonialGrid testimonials={testimonials} />;
}
