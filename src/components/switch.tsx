"use client";
import { useToggle, Section } from "@/styles/state/toggle-state";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { useEffect } from "react";

const Switch = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { section, changeSection } = useToggle();

  const handleToggleChange = (value: Section) => {
    changeSection(value);
  };

 return (
 
  <div className="w-full flex items-center justify-center font-manrope">
    <div className="bg-[#edf2f3] grid grid-cols-3 p-1 rounded-[50px] h-14 w-[420px]">
      <div
        onClick={() => handleToggleChange(Section.user)}
        className={`h-full cursor-pointer rounded-[48px] flex items-center justify-center ${
          section === Section.user && "bg-primary"
        }`}
      >
        <p className={`${section === Section.user ? "text-white" : "text-[#6A6A6A]"}`}>
          Customer
        </p>
      </div>
      <div
        onClick={() => handleToggleChange(Section.partner)}
        className={`h-full cursor-pointer rounded-[48px] flex items-center justify-center ${
          section === Section.partner && "bg-primary"
        }`}
      >
        <p className={`${section === Section.partner ? "text-white" : "text-[#6A6A6A]"}`}>
          Partners
        </p>
      </div>
      <div
        onClick={() => handleToggleChange(Section.salon)}
        className={`h-full cursor-pointer rounded-[48px] flex items-center justify-center ${
          section === Section.salon && "bg-primary"
        }`}
      >
        <p className={`${section === Section.salon ? "text-white" : "text-[#6A6A6A]"}`}>
          Salon Owners
        </p>
      </div>
    </div>
  </div>
  
);

};
export default Switch;
