import Image from "next/image"
import downloadImg from '../../../public/images/owners/owner-download.png'
import footerLogo from '../../../public/images/logo.png'
import { Button } from "../ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { useState } from "react";
import QrModal from "../qr-modal";
import playStore from '../../../public/images/playstore.png'
import apple from '../../../public/images/apple.png'
const Download = () => {
    const [android, setAndroidOpen] = useState<boolean>(false)
    const [ios, setIosOpen] = useState<boolean>(false)
    return (
        <div className="mt-16 bg-cardBgColor py-16 px-4 sm:px-6 md:px-8 lg:px-28 ">
            <div className="flex md:flex-row flex-col items-center md:justify-between justify-center">
                <div className="lg:w-1/2 md:w-[60%] w-full flex md:flex-col flex-col-reverse md:items-start items-center md:gap-y-0 gap-y-2">
                    <div className="flex items-center gap-x-2">
                        <Image src={footerLogo} className="max-w-[40px]" alt="" />
                        <p className="xs:text-base text-sm">Download now and start your experience</p>
                    </div>

                    <div className="font-bold sm:text-left text-center xl:text-[74px] lg:text-[64px] md:text-[50px] xs:text-[40px] text-[32px] leading-tight">
                        Manage it all, in an all new system.
                    </div>

                    <div className="md:flex hidden sm:flex-row flex-col items-center gap-4 mt-6">
                        <Button onClick={() => setAndroidOpen(true)} className="bg-primaryTextColor px-6 py-7 border border-primary w-[240px]">
                            <p>Download for Android</p>
                            <ArrowUpRightIcon size={20} className="ml-2" />
                        </Button>
                        <Button onClick={() => setIosOpen(true)} className="bg-primaryTextColor px-6 py-7 border border-primary w-[240px]">
                            <p>Download for iOS</p>
                            <ArrowUpRightIcon size={20} className="ml-2" />
                        </Button>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-[40%] w-full flex items-center justify-center">
                    <Image src={downloadImg} className="xl:w-2/3 lg:w-[80%] md:w-full w-1/2" alt="" />
                </div>


                <div className="md:hidden flex sm:flex-row flex-col items-center justify-center gap-4 mt-6">
                    <Button className="bg-primaryTextColor py-7 w-[240px] border border-primary flex items-center gap-x-4">
                        <Image src={apple} className='max-w-[30px]' alt='' />
                        <div className='flex flex-col items-start'>
                            <p className='text-sm font-light'>Download on the</p>
                            <h2 className='font-semibold text-lg'>App Store</h2>
                        </div>
                    </Button>
                    <Button className="bg-primaryTextColor py-7 w-[240px] border border-primary flex items-center gap-x-4">
                        <Image src={playStore} className='max-w-[30px]' alt='' />
                        <div className='flex flex-col items-start'>
                            <p className='text-sm font-light'>Get it on</p>
                            <h2 className='font-semibold text-lg'>Google Play</h2>
                        </div>
                    </Button>
                </div>
                <QrModal open={android} title="Android" setOpen={setAndroidOpen} />
                <QrModal open={ios} title="iOS" setOpen={setIosOpen} />


            </div>
        </div>
    )
}
export default Download