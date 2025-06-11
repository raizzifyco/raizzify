import Image from "next/image";
import Features1 from "../../../public/images/partner/features_1.svg";
import Feature2 from "../../../public/images/partner/features_2.svg";
import Feature3 from "../../../public/images/partner/features_3.svg";
const Features = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#FCFDF8] to-[#59e5ce] pl-6 pb-10">
        <div className="flex justify-end w-full md:hidden mb-6">
          <Image alt="Features1" src={Features1} width={300} height={300} />
        </div>

        <div className="flex flex-col items-start text-center md:text-left md:items-start gap-4 md:pl-20 md:w-1/2">
          <div className="text-[#1B857C] text-2xl md:text-3xl">
            Connect with 40+ Business Categories
          </div>
          <div className="text-base md:text-lg">
            <p>
              Grow your business with cross-industry exposure—from cafes to
              salons to car washes. Get new customers, build loyalty, and drive
              repeat visits with Raizzify.
            </p>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <Image alt="Features1" src={Features1} width={550} height={550} />
        </div>
      </div>

      <div>
        <div
  className="flex flex-col md:flex-row justify-between items-center h-screen md:py-2 py-20 md:pl-20 pl-0 md:pr-10 pr-0 bg-gradient-to-br from-[#FFCD3B] to-[#FCFDF8]"
>
  
  <div className="md:w-1/2 w-full flex justify-center md:justify-start px-1 md:px-0">
    <Image alt="Feature2" src={Feature2} />
  </div>

  
  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 px-10 md:pl-20 md:w-1/2">
    <div>
      <h2 className="text-[#AA7F00] text-2xl md:text-4xl font-semibold">
        Smart Coupons That Drive Action
      </h2>
      <p className="text-base md:text-lg mt-2">
        Will you enjoy a free haircut or a car wash after your next purchase?
        That’s the feeling your customers will get — coupons based on their bill,
        redeemable across top businesses, including your own for repeat visits.
      </p>
    </div>
  </div>
</div>
      </div>
   <div className="flex flex-col md:flex-row-reverse justify-between items-center h-auto md:h-screen md:py-2 py-10 md:px-20 px-6 bg-gradient-to-br from-[#e4e4e3] to-[#eb9e81]">
  
  <div className="w-full md:w-full flex justify-center md:justify-start mb-6 md:mb-0">
    <Image alt="Feature3" src={Feature3} width={750} height={750} />
  </div>

  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-2">
    <h2 className="text-[#FF500D] text-2xl md:text-4xl font-semibold">
      Increase Average Order Value
    </h2>
    <p className="text-base md:text-lg mt-2">
      Bigger bills mean better rewards! Customers unlock more coupons and perks at salons, cafes, cinemas, and more.
    </p>
  </div>
</div>



    </div>
  );
};
export default Features;
