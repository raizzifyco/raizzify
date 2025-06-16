import Image from "next/image";

import Features4 from "../../../public/images/user1/img3.svg";



const UserFeatures = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 flex flex-col md:flex-row md:h-full justify-center items-center bg-gradient-to-t from-[#FCFDF8] to-[#9be5d9] px-6 py-16 md:py-15">
        <Image
          alt="Features4"
          src={Features4}
          width={1000}
          height={850}
          className="w-full max-w-4xl"
        />

      </div>

     
    
      
    </div>
  );
};

export default UserFeatures;
