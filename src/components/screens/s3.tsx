import React from "react";
import im3 from "../../../public/images/graphics/im3.svg";
import Image from "next/image";

const MoreProfitComponent = () => {
  return (
    <div className="relative bg-gradient-to-tr h-screen from-[#FCFDF8]/[0.56] to-[#FF4400]/[0.56]">
      <div className="container mx-0">
        <div className="absolute top-0 right-0 md:right-0">
          <Image
            src={im3}
            alt="Background Image"
            className="w-auto h-[90vh] max-w-[90vw] object-contain"
            style={{ objectPosition: "top right" }}
          />
        </div>

        {/* Content positioned on the right since image is on left */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-end md:relative md:right-0 md:top-0 md:h-screen md:w-1/2 md:pr-10">
          <div className="text-center px-4 md:text-right md:mr-40">
            <div
              className="font-jakarta font-semibold text-[2rem] md:text-[2.5rem] leading-[1.3] mb-6"
              style={{ color: "#FF500D" }}
            >
              Get More Customers
            </div>

            <div
              className="font-jakarta font-normal text-[1.25rem] md:text-[1.5rem] leading-[1.4] max-w-[30rem] mx-auto md:ml-auto md:mr-0"
              style={{ color: "#525252" }}
            >
              Show casing the impact of Business Network, Become a part of
              Business Network
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProfitComponent;
