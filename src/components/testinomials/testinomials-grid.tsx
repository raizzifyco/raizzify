import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const bgColorMap: Record<string, string> = {
  sky: "bg-sky-100", // Calm and fresh
  violet: "bg-violet-100", // Matches tech-brand themes
  indigo: "bg-indigo-100", // Confident and smart
  emerald: "bg-emerald-100", // Trustworthy and modern
  slate: "bg-slate-100", // Neutral, professional base
  rose: "bg-rose-100", // Subtle warmth
};

const itemVariants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
    scale: 0.95,
  }),
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type TestimonialCardProps = {
  quote: string;
  name: string;
  username: string;
  avatarSrc?: StaticImageData;
  className?: string;
  companyLogo?: React.ReactNode;
  avatarPosition?: "top" | "bottom";
  color?: keyof typeof bgColorMap;
};

export function TestimonialCard({
  quote,
  name,
  username,
  avatarSrc,
  className,
  companyLogo,
  avatarPosition = "bottom",
  color,
}: TestimonialCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl p-6 shadow-sm flex flex-col",
        className,
        color ? bgColorMap[color] || "bg-white" : "bg-white"
      )}
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
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
    </motion.div>
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
  color?: keyof typeof bgColorMap;
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
    <section className={cn("py-12 md:py-20 bg-white", className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
        <p className="text-gray-500 mt-2">
          Hear from our satisfied users about their experiences.
        </p>
      </div>
      <motion.div
        variants={{ show: { transition: { staggerChildren: 1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container px-4 mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 justify-center">
          {testimonials.map((testimonial, index) => {
            const size = testimonial.size || "small";
            let sizeClasses = "";

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
                color={testimonial.color}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
