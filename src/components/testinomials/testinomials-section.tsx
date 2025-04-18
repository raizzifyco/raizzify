import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type TestimonialProps = {
  quote: string;
  name: string;
  username: string;
  avatarSrc?: string;
  className?: string;
};

const Testimonial = ({
  quote,
  name,
  username,
  avatarSrc,
  className,
}: TestimonialProps) => {
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-sm", className)}>
      <p className="text-gray-700 mb-4 text-sm md:text-base">"{quote}"</p>
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border border-purple-100">
          <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{username}</p>
        </div>
      </div>
    </div>
  );
};

type CompanyTestimonialProps = {
  quote: string;
  name: string;
  username: string;
  avatarSrc?: string;
  companyLogo?: React.ReactNode;
  className?: string;
};

const CompanyTestimonial = ({
  quote,
  name,
  username,
  avatarSrc,
  companyLogo,
  className,
}: CompanyTestimonialProps) => {
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-sm", className)}>
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-purple-100">
            <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-gray-500 text-sm">{username}</p>
          </div>
        </div>
        {companyLogo}
      </div>
      <p className="text-gray-700 text-sm md:text-base">"{quote}"</p>
    </div>
  );
};

export interface TestimonialSectionProps {
  className?: string;
  testimonials: {
    quote: string;
    name: string;
    username: string;
    avatarSrc?: string;
  }[];
  companyTestimonial?: {
    quote: string;
    name: string;
    username: string;
    avatarSrc?: string;
    companyLogo?: React.ReactNode;
  };
}

export function TestimonialSection({
  className,
  testimonials,
  companyTestimonial,
}: TestimonialSectionProps) {
  return (
    <section className={cn("py-12 md:py-20 bg-purple-50", className)}>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              username={testimonial.username}
              avatarSrc={testimonial.avatarSrc}
            />
          ))}

          {companyTestimonial && (
            <CompanyTestimonial
              quote={companyTestimonial.quote}
              name={companyTestimonial.name}
              username={companyTestimonial.username}
              avatarSrc={companyTestimonial.avatarSrc}
              companyLogo={companyTestimonial.companyLogo}
              className="md:col-span-2 lg:col-span-1 lg:row-span-2"
            />
          )}

          {testimonials.slice(2, 8).map((testimonial, index) => (
            <Testimonial
              key={index + 2}
              quote={testimonial.quote}
              name={testimonial.name}
              username={testimonial.username}
              avatarSrc={testimonial.avatarSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
