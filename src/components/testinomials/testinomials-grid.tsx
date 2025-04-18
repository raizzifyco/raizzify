import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

type TestimonialCardProps = {
  quote: string;
  name: string;
  username: string;
  avatarSrc?: StaticImageData;
  className?: string;
  companyLogo?: React.ReactNode;
  avatarPosition?: "top" | "bottom";
};

export function TestimonialCard({
  quote,
  name,
  username,
  avatarSrc,
  className,
  companyLogo,
  avatarPosition = "bottom",
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm flex flex-col",
        className
      )}
    >
      {avatarPosition === "top" && (
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-purple-100">
              <AvatarImage
                src={avatarSrc?.src || "/images/pic1.png"}
                alt={name}
              />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium text-gray-900">{name}</h4>
              <p className="text-gray-500 text-sm">{username}</p>
            </div>
          </div>
          {companyLogo}
        </div>
      )}

      <p className="text-gray-700 mb-4 text-sm md:text-base flex-grow">
        "{quote}"
      </p>

      {avatarPosition === "bottom" && (
        <div className="flex items-center gap-3 mt-auto">
          <Avatar className="h-10 w-10 border border-purple-100">
            <AvatarImage
              src={avatarSrc?.src || "/images/pic1.png"}
              alt={name}
            />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-gray-500 text-sm">{username}</p>
          </div>
        </div>
      )}
    </div>
  );
}

type TestimonialData = {
  quote: string;
  name: string;
  username: string;
  avatarSrc?: StaticImageData;
  companyLogo?: React.ReactNode;
  size?: "small" | "medium" | "large";
  avatarPosition?: "top" | "bottom";
};

export interface TestimonialGridProps {
  className?: string;
  testimonials: TestimonialData[];
}

export function TestimonialGrid({
  className,
  testimonials,
}: TestimonialGridProps) {
  return (
    <section className={cn("py-12 md:py-20 bg-blue-50", className)}>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 justify-center">
          {testimonials.map((testimonial, index) => {
            const size = testimonial.size || "small";
            let sizeClasses = "";

            // Determine grid span based on size
            if (size === "small") {
              sizeClasses = "md:col-span-4";
            } else if (size === "medium") {
              sizeClasses = "md:col-span-6";
            } else if (size === "large") {
              sizeClasses = "md:col-span-8";
            }

            return (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                username={testimonial.username}
                avatarSrc={testimonial.avatarSrc}
                companyLogo={testimonial.companyLogo}
                avatarPosition={testimonial.avatarPosition}
                className={sizeClasses}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
