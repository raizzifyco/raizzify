import Image from "next/image";
import Hero5 from "../../../public/images/user1/img1.svg";
import Hero6 from "../../../public/images/user1/appstore.svg";
import Hero7 from "../../../public/images/user1/google.svg";
import Switch from "../switch";

const UserHero = () => {
  return (
    <div>
      <Switch />
      <div className="relative flex flex-col items-center justify-center bg-gradient-to-l from-[#F4E4A5] to-[#59E5CE] min-h-screen px-4 md:px-10 py-10">
        
        <div className="w-full max-w-screen-xl">
          <Image
            src={Hero5}
            alt="Hero5"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

       
        <div className="absolute top-4 w-full flex justify-center">
          <div className="text-center text-[#416660] text-sm md:text-lg font-extrabold">
            By Team of IITians and ISBians
          </div>
        </div>

        
        <div className="absolute top-[20%] w-full flex justify-center">
          <h1 className="text-center text-3xl md:text-5xl text-[#416660] font-bold">
            One Visit. Endless Returns.
          </h1>
        </div>

      
        <div className="absolute top-[25%] w-full flex justify-center">
          <div className="text-[40px] md:text-[80px] lg:text-[105px] tracking-[4px] md:tracking-[10px] text-center font-extrabold bg-gradient-to-r drop-shadow-lg from-[#3fb59d] to-[#405E59] bg-clip-text text-transparent leading-tight">
            RAIZZIFY
          </div>
        </div>

       
        <div className="absolute bottom-28 sm:bottom-24 w-full flex justify-center">
          <button className="rounded-full border border-black bg-white py-2 px-6 md:px-10 text-sm md:text-base font-semibold hover:scale-105 transition">
            Download Raizzfy Now
          </button>
        </div>

       
        <div className="absolute bottom-8 w-full flex justify-center">
          <div className="flex gap-6">
            <a
              href="https://apps.apple.com/in/app/raizzify/id6636553867"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Image alt="App Store" src={Hero6} width={120} height={40} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.raizzify.hercules&hl=en_IN&pli=1"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Image alt="Google Play" src={Hero7} width={120} height={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHero;
