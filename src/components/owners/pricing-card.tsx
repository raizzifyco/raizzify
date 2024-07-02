import { cn } from "@/lib/utils";
import { ReactElement } from "react";
import '../../styles/app.css'
interface PricingCardProps {
    type: string;
    price: string;
    description: string;
    features: React.ReactNode;
    button: ReactElement;
    className: string;
}
const PricingCard = ({ type, price, description, className, features, button }: PricingCardProps) => {

    return (
        <div className="relative">
            <div className={cn("border-[10px] rounded-3xl flex flex-col gap-y-4 py-8 px-6", className)}>
                <h1>{type}</h1>
                <p className="font-bold text-xl">{price}</p>
                <p className="text-muted-foreground font-light">{description}</p>
                {features}
                {button}
            </div>
            <div className="card-blur absolute w-full top-0 bottom-0 left-0 right-0 rounded-3xl">

            </div>
        </div>
    )
}

export default PricingCard