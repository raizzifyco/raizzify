import { Check } from "lucide-react";
import PricingCard from "./pricing-card";
import { Button } from "../ui/button";

const pricingOptions = [
  {
    type: "Free",
    price: "$0",
    description: "For anyone validating Framer as a professional prototyping tool..",
    features: (
      <ul className="flex flex-col gap-y-1">
        <li className="inline-flex items-center gap-x-2"><Check className="text-primary" size={18} /> Unlimited Revisions</li>
        <li className="inline-flex items-center gap-x-2"><Check className="text-primary" size={18} /> Up to 2 editors</li>
        <li className="inline-flex items-center gap-x-2"><Check className="text-primary" size={18} /> Up to 3 projects</li>
      </ul>
    ),
    button: <Button>Subscribe</Button>,
    className: "border-muted",
  },
  {
    type: "Pro",
    price: "$20/month",
    description: "For anyone validating Framer as a professional prototyping tool.",
    features: (
      <ul className="flex flex-col gap-y-1">
        <li className="inline-flex items-center gap-x-2"><Check className="text-black" size={18} /> Unlimited Revisions</li>
        <li className="inline-flex items-center gap-x-2"><Check className="text-black" size={18} /> Up to 2 editors</li>
        <li className="inline-flex items-center gap-x-2"><Check className="text-black" size={18} /> Up to 3 projects</li>
        <li className="inline-flex items-center gap-x-2"><Check className="text-black" size={18} /> Up to 3 projects</li>
        <li className="inline-flex items-center gap-x-2"><Check className="text-black" size={18} /> Up to 3 projects</li>
      </ul>
    ),
    button: <Button className="bg-white text-primary">Subscribe</Button>,
    className: "border-primaryBorderColor bg-primary",
  },
  {
    type: "Enterprise",
    price: "Custom",
    description: "For anyone validating Framer as a professional prototyping tool.",
    features: (
      <ul className="flex flex-col gap-y-1">
        <li className="inline-flex items-center gap-x-2"><Check className="text-primary" size={18} /> Unlimited Revisions</li>
        <li className="inline-flex items-center gap-x-2"><Check className="text-primary" size={18} /> Up to 2 editors</li>
        <li className="inline-flex items-center gap-x-2"><Check className="text-primary" size={18} /> Up to 3 projects</li>
      </ul>
    ),
    button: <Button>Subscribe</Button>,
    className: "border-muted",
  }
];
const MonthlyPricing = () => {
  return (
    <div className="w-full relative mt-6">
      <div className="flex lg:flex-row flex-col gap-y-6 items-start gap-x-6 w-full">
        {pricingOptions.map((option, index) => (
          <PricingCard
            key={index}
            type={option.type}
            price={option.price}
            description={option.description}
            features={option.features}
            button={option.button}
            className={option.className}
          />
        ))}
      </div>
    </div>
  )
}
export default MonthlyPricing