import Image from "next/image";
import Features5 from "../../../public/images/user1/img2.svg";
import Features4 from "../../../public/images/user1/img3.svg";
import Features6 from "../../../public/images/user1/img4.svg";

const UserFeatures = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:h-full justify-center items-center bg-gradient-to-t from-[#FCFDF8] to-[#9be5d9] px-6 py-16 md:py-15">
        <Image
          alt="Features4"
          src={Features4}
          width={1000}
          height={850}
          className="w-full max-w-4xl"
        />
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center px-6 md:px-20 py-16 bg-gradient-to-br from-[#59e5ce] to-[#fbfbfb]">
        <Image
          alt="Features5"
          src={Features5}
          width={600}
          height={100}
          className="w-full max-w-md mb-6 md:mb-0 rounded-full"
        />

        <div className="text-center md:text-left md:pl-16 md:w-1/2">
          <h2 className="text-[#1B857C] text-2xl md:text-3xl font-semibold mb-4">
            Get More Customers
          </h2>
          <p className="text-base md:text-lg text-gray-800">
            Showcasing the impact of the Business Network. Become a part of it
            and grow with us.
          </p>
        </div>
      </div>
    
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 bg-gradient-to-br from-[#59e5ce] to-[#fbfbfb]">
        <Image
          alt="Features6"
          src={Features6}
          width={600}
          height={100}
          className="w-full max-w-md mb-6 md:mb-0 rounded-full"
        />
        <div className="text-center md:text-left md:pl-16 md:w-1/2">
          <h2 className="text-[#1B857C] text-2xl md:text-3xl font-semibold mb-4">
            Get More Customers
          </h2>
          <p className="text-base md:text-lg text-gray-800">
            Showcasing the impact of the Business Network. Become a part of it
            and grow with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserFeatures;
