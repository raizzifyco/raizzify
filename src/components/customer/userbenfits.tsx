import Image from "next/image";
import Features5 from "../../../public/images/user1/img2.svg";

import Features6 from "../../../public/images/user1/img4.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

const UserFeatures = () => {
  return (
    <div className="relative">
      <div className=" sticky top-0 flex flex-col  md:flex-row-reverse justify-between items-center px-6 md:px-20 py-16 bg-gradient-to-br from-[#59e5ce] to-[#fbfbfb] h-screen ">
        <Image
          alt="Features5"
          src={Features5}
          width={600}
          height={100}
          className="w-full max-w-md mb-6 md:mb-0 rounded-full"
          loading="lazy"
        />

        <div className="text-center md:text-left md:pl-16 md:w-1/2">
          <h2 className="text-[#1B857C] text-2xl md:text-3xl font-semibold mb-4">
            Download Raizzify
          </h2>
          <p className="text-base md:text-lg text-gray-800">
            Download Raizzify now and unlock free Haircut coupons, café &
            restaurant deals, car wash offers, laundry discounts — across 40+
            local businesses!
          </p>
        </div>
      </div>

      <div className="sticky top-0 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 bg-gradient-to-br from-[#59e5ce] to-[#fbfbfb] h-screen">
        <Image
          alt="Features6"
          src={Features6}
          width={600}
          height={100}
          className="w-full max-w-md mb-6 md:mb-0 rounded-full"
        />
        <div className="text-center md:text-left md:pl-16 md:w-1/2">
          <h2 className="text-[#1B857C] text-2xl md:text-3xl font-semibold mb-4">
            Use Raizzify
          </h2>
          <p className="text-base md:text-lg text-gray-800">
            Pay via Raizzify using Paytm, GPay, or any UPI — and get coupons
            equal to or more than your bill!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserFeatures;
