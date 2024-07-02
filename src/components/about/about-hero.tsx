import Image from 'next/image'
import about from '../../../public/images/about.jpeg'
import { Button } from '../ui/button'
const AboutHero = () => {
    return (
        <div className='py-10 xl:px-20 lg:px-14 px-4 sm:px-6 md:px-8'>
            <div className='relative'>
                <Image className='w-full h-[80vh] object-cover rounded-2xl' src={about} alt='' />
                <div className='bg-black/40 h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl'>
                </div>
                <div className='absolute flex flex-col items-center text-center top-1/2 w-full left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Button className='bg-primary px-10 rounded-3xl'>
                        About
                    </Button>
                    <h1 className='text-white font-bold md:text-[74px] text-[40px]'>About Raizzify</h1>
                    <p className='text-lg font-light text-cardBgColor'>Learn more about the company and the team behind it.</p>
                </div>
            </div>
        </div>
    )
}
export default AboutHero