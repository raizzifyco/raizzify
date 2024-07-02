import { Button } from "../ui/button"
import team from '../../../public/images/team.jpeg'
import Image from "next/image"
const teamData = [
    {
        image : team,
        name : "John Doe",
        designation : "Founder & CEO",
        description : "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        twitterLink : "https://twitter.com/",
        linkedinLink : "https://linkedin.com/"
    },
    {
        image : team,
        name : "James Bond",
        designation : "Founder & CEO",
        description : "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        twitterLink : "https://twitter.com/",
        linkedinLink : "https://linkedin.com/"
    },
    {
        image : team,
        name : "Dwane Smith",
        designation : "Founder & CEO",
        description : "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        twitterLink : "https://twitter.com/",
        linkedinLink : "https://linkedin.com/"
    },
    {
        image : team,
        name : "Jane Doe",
        designation : "Founder & CEO",
        description : "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        twitterLink : "https://twitter.com/",
        linkedinLink : "https://linkedin.com/"
    },
]
const Team = () => {
    return (
        <div className="py-10 px-14">
            <div className="flex flex-col items-center gap-y-4">
                <Button className="rounded-3xl px-10">
                    Our Team
                </Button>
                <h2 className="text-[40px] font-semibold text-primaryTextColor">Meet the team behind Raizzify</h2>
                <p className="text-muted-foreground w-1/2 text-center">We’re a small team that loves to create great experiences and make meaningful connections between builders and customers. Join our remote ream!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-10 mt-10">
                {
                    teamData.map((member,i) => (
                        <div key={i} className="">
                            <Image src={member.image} alt="" className="rounded-md w-full h-[300px] object-cover" />
                            <div className="my-4 flex flex-col gap-y-1">
                                <p className="font-semibold">{member.name}</p>
                                <p className="text-primary">{member.designation}</p>
                            </div>
                            <p>{member.description}</p>
                            <div className="mt-4">
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Team