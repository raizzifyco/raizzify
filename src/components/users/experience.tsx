import expImg1 from '../../../public/images/user/experience/expimg1.jpeg'
import expImg2 from '../../../public/images/user/experience/expimg2.jpeg'
import expImg3 from '../../../public/images/user/experience/expimg3.jpeg'
import expImg4 from '../../../public/images/user/experience/expimg4.jpeg'
import expImg5 from '../../../public/images/user/experience/expimg5.jpeg'
import ExperienceCard from './experience-card'

const cardData = [
    { imgSrc: expImg1, title: "Appointments Made Simple", description: "Book, reschedule, or cancel appointments anytime." },
    { imgSrc: expImg2, title: "Appointments Made Simple", description: "Book, reschedule, or cancel appointments anytime." },
    { imgSrc: expImg3, title: "Appointments Made Simple", description: "Book, reschedule, or cancel appointments anytime." },
    { imgSrc: expImg4, title: "Appointments Made Simple", description: "Book, reschedule, or cancel appointments anytime." },
    { imgSrc: expImg5, title: "Appointments Made Simple", description: "Book, reschedule, or cancel appointments anytime." },
];
const Experience = () => {
    return (
        <div className="py-16 lg:px-28 px-4 sm:px-6 md:px-8">

            <div className="flex flex-col gap-y-2 items-center">
                <h2 className="font-bold md:text-[40px] xs:text-[30px] text-[28px] text-center">Your Salon Experience, Reimagined</h2>
                <p className="font-normal text-center">Discover the app that connects you to a relaxing environment and top-notch stylists - all at your fingertips.</p>
            </div>

            <div className="grid gap-8 mt-8">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
                    {cardData.slice(0, 2).map((card, index) => (
                        <ExperienceCard key={index} img={card.imgSrc} title={card.title} description={card.description} />
                    ))}
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                    {cardData.slice(2).map((card, index) => (
                        <ExperienceCard key={index + 2} img={card.imgSrc} title={card.title} description={card.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Experience