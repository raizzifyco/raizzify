"use client"
import { useToggle } from "@/styles/state/toggle-state"
import { usePathname, useRouter } from "next/navigation"
import path from "path"
import { useEffect } from "react"

const Switch = () => {

    const pathname = usePathname()
    const router = useRouter()
    const { isToggled, toggle } = useToggle()


    const handleToggleChange = (value: boolean) => {
        toggle(value)
    }

    return (
        <div className="w-full flex items-center justify-center font-manrope">
            <div className="bg-[#E7F8FB] grid grid-cols-2 p-1 rounded-[50px] h-14 w-[280px]">
                <div onClick={() => handleToggleChange(true)} className={`h-full cursor-pointer rounded-[48px] flex items-center justify-center ${isToggled && "bg-primary"}`}>
                    <p className={`${isToggled ? "text-white" : "text-[#6A6A6A]"}`}>Salon Users</p>
                </div>
                <div onClick={() => handleToggleChange(false)} className={`h-full cursor-pointer rounded-[48px] flex items-center justify-center ${!isToggled && "bg-primary"}`}>
                    <p className={`${isToggled ? "text-[#6A6A6A]" : "text-white"}`}>Salon Owners</p>
                </div>
            </div>
        </div>
    )
}
export default Switch