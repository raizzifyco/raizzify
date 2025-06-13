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

     
    
      
    </div>
  );
};

export default UserFeatures;
