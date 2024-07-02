import Image, { StaticImageData } from 'next/image';

interface ExperienceCardProps {
    img: StaticImageData;
    title: string;
    description: string;
}
const ExperienceCard = ({ img, title, description }: ExperienceCardProps) => (
    <div className="h-[320px] sm:h-[380px] relative">
        <Image src={img} alt='' className='h-full w-full object-cover rounded-lg' />
        <div className='bg-black/15 w-full h-full absolute top-0 rounded-lg'>
            <div className='absolute text-tertiaryColor bottom-4 left-4'>
                <p className='font-semibold text-base'>{title}</p>
                <p className='font-light text-sm'>{description}</p>
            </div>
        </div>
    </div>
);

export default ExperienceCard;
