import { QRCodeCanvas } from 'qrcode.react';
import footerDevice from '../../../public/images/user-download.png'
import Image from "next/image"
import { Button } from '../ui/button';
import { ArrowUpRightIcon } from 'lucide-react';
import QrModal from '../qr-modal';
import { useState } from 'react';
import playStore from '../../../public/images/playstore.png'
import apple from '../../../public/images/apple.png'
const UserDownload = () => {

  const [android, setAndroidOpen] = useState<boolean>(false)
  const [ios, setIosOpen] = useState<boolean>(false)

  return (
    <div>

      <div className="bg-primaryTextColor flex items-center justify-center py-16 pb-40">
        <div className="flex flex-col gap-y-6">
          <h1 className="sm:text-[64px] xs:text-[48px] text-[40px] text-white font-semibold text-center">Start Using <span className="toggle-gradient">Raizzify</span> Now</h1>
          <p className="text-tertiaryColor font-light text-center"> Download our app now to enjoy a seamless and <br />
            personalised salon experience.</p>

          <div className="flex sm:flex-row flex-col items-center justify-center gap-4 mt-6">
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

      <div className='bg-white xs:min-h-[75vh] h-[60vh] relative'>
        <Image src={footerDevice} className='absolute -top-40 left-1/2 -translate-x-[40%] xs:max-w-[400px] max-w-[280px]' alt='' />
      </div>


      <QrModal open={android} title="Android" setOpen={setAndroidOpen} />
      <QrModal open={ios} title="iOS" setOpen={setIosOpen} />
    </div>

  )
}
export default UserDownload