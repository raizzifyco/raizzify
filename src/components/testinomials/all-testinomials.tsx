import { TestimonialGrid } from "@/components/testinomials/testinomials-grid";
import avatarImg from "../../../public/images/pic1.png";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
      name: "Brenna Goyette",
      username: "@brennagoyette",
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
    },
    {
      quote:
        "We just got Raizzify for our salon and we love it! It's easy to use for bookings and setting up services. We're excited that it might help us sell more products too. Can't wait to see how it grows our business!",
      name: "Mr. Abhishek",
      username: "TRP Salon",
      avatarSrc: avatarImg,
      size: "small" as const,
    },
    {
      quote:
        "Our salon is pretty new, and we wanted something to help us stand out. Raizzify looks perfect for us! It's easy for appointments and lets customers buy our products too. We think this will really help our business grow!",
      name: "Ms. Shweta",
      username: "Reflection Salon",
      avatarSrc: avatarImg,
      size: "medium" as const,
    },
    {
      quote:
        "We just started Raizzify for our salon. It's easy to use, even for us who aren't great with computers. We love how it handles bookings and also let us sell our products on the app. Can't wait to see how our customers like it!",
      name: "Mr. Shahrukh",
      username: "Clippers Cutters",
      avatarSrc: avatarImg,
      size: "small" as const,
    },
    {
      quote:
        "Raizzify has been a game changer for our studio! The booking process is smooth, and our clients love the convenience of purchasing products directly through the app. It has definitely helped us increase our revenue.",
      name: "Ms. Priyanka",
      username: "Glow Beauty Studio",
      avatarSrc: avatarImg,
      size: "small" as const,
    },
    {
      quote:
        "Using Raizzify has made managing our salon so much easier. Our clients find it simple to book appointments, and we’ve seen a boost in product sales since integrating with the app. We're thrilled with the results!",
      name: "Mr. Rahul",
      username: "Urban Groomers",
      avatarSrc: avatarImg,
      size: "large" as const,
    },
  ];

  return (
    <main>
      <TestimonialGrid testimonials={testimonials} />
    </main>
  );
}
