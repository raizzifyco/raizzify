import footerDevice from '../../../public/images/user/user-download.png'
import Image from "next/image"
import { Button } from '../ui/button';
import { ArrowUpRightIcon } from 'lucide-react';
import QrModal from '../qr-modal';
import { useState } from 'react';
import playStore from '../../../public/images/playstore.png'
import apple from '../../../public/images/apple.png'
import bg from '../../../public/images/user/user-download-bg.png'

interface DownloadCompProps {
  gradientTitle: string;
}
const DownloadComp = ({ gradientTitle }: DownloadCompProps) => {

  const [android, setAndroidOpen] = useState<boolean>(false)
  const [ios, setIosOpen] = useState<boolean>(false)

  return (
    <div>
      <div className="download-bg flex items-center justify-center py-10 pb-60 px-4">
        <div className="flex flex-col gap-y-6">
          <h1 className="sm:text-[64px] xs:text-[48px] text-[40px] text-white font-medium text-center font-cabin">Start Using <span className="text-primary font-space-grotesk">{gradientTitle}</span> Now</h1>
          <p className="text-tertiaryColor font-light text-center"> Download our app now to enjoy a seamless and <br />
            personalised salon experience.</p>

          <div className="md:flex justify-center hidden sm:flex-row flex-col items-center gap-4 mt-6">
            <Button onClick={() => setAndroidOpen(true)} className="bg-transparent px-6 py-7 border border-primary w-[240px]">
              <p>Download for Android</p>
              <ArrowUpRightIcon size={20} className="ml-2" />
            </Button>
            <Button onClick={() => setIosOpen(true)} className="bg-transparent px-6 py-7 border border-primary w-[240px]">
              <p>Download for iOS</p>
              <ArrowUpRightIcon size={20} className="ml-2" />
            </Button>
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
        </div>
      </div>

      <div className='bg-white xs:min-h-[60vh] h-[50vh] relative'>
        <Image src={footerDevice} className='absolute left-1/2 -translate-x-[50%] -translate-y-[50%] xs:max-w-[250px] max-w-[170px]' alt='' />
      </div>


      <QrModal open={android} title="Android" setOpen={setAndroidOpen} />
      <QrModal open={ios} title="iOS" setOpen={setIosOpen} />
    </div>

  )
}
export default DownloadComp