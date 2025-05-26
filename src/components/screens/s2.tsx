import React from "react";
import im2 from "../../../public/images/graphics/im2.svg";
import Image from "next/image";

const CouponComponent: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-tr h-screen from-[#FCFDF8] to-[#FFCD3B]">
      <div className="container mx-0">
        {/* Image positioned on the left based on imagePosition="left" */}
        <div className="absolute top-0 left-0 md:left-0">
          <Image
            src={im2}
            alt="Background Image"
            className="w-auto h-[90vh] max-w-[90vw] object-contain"
            style={{ objectPosition: "top left" }}
          />
        </div>

        {/* Content positioned on the right since image is on left */}
        <div className="absolute top-0 right-0 md:right-20 w-full md:w-1/2 h-screen flex items-center justify-end p-4 md:p-10">
          <div className="text-center md:text-right max-w-md">
            <div
              className="font-jakarta font-semibold text-[2rem] md:text-[2.5rem] leading-[1.3] mb-6"
              style={{ color: "#AA7F00" }}
            >
              Get More Customers
            </div>

            <div
              className="font-jakarta font-normal text-[1.25rem] md:text-[1.5rem] leading-[1.4]"
              style={{ color: "#525252" }}
            >
              Customers will receive coupons worth the amount of their bill.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponComponent;
