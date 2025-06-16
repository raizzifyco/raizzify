import Link from "next/link"

const Footer = () => {
    return (
        <div className="relative px-2 sm:px-6 md:px-8 lg:px-14 font-manrope">
            <div className="footer-bg rounded-b-none w-full rounded-t-[50px] md:pt-20 sm:pt-10 pt-8 pb-2 lg:px-10 px-4 sm:px-6 md:px-8">
                <div className="max-w-screen-2xl">
                    <div className="flex md:flex-row flex-col items-start gap-y-6 justify-between w-full">
                        <div className="flex items-start md:w-[20%] flex-col gap-y-2 relative">
                            <h1 className="uppercase font-bold text-[48px] text-primary font-space-grotesk z-10">RAIZZIFY</h1>
                            <p className="text-white font-light text-sm opacity-60">Raizzify, founded by a team of IITians and ISBians, is an innovation-driven platform on a mission to empower local businesses through intelligent customer engagement, digital visibility, and data-driven growth.  </p>
                        </div>

                        <div className="md:w-1/2 relative w-full grid md:grid-cols-3 grid-cols-2 justify-between md:gap-x-6 gap-x-20 gap-y-6">
                            <div className="flex flex-col">
                                <p className="text-white opacity-60">Pages</p>
                                <hr className="text-white opacity-[8%] mt-2 w-1/2" />

                                <div className="flex flex-col gap-y-2 text-white font-light mt-4">
                                    <Link href={"/about"}>About us</Link>
                                    <p>Partners</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <p className="text-white opacity-60">Legal</p>
                                    <hr className="text-white opacity-[8%] w-2/3 mt-2" />

                                    <div className="flex flex-col gap-y-2 text-white font-light mt-4">
                                        <Link href={"/privacy-policy"}>Privacy Policy</Link>
                                        <Link href={"/refund-cancellation"}>Refund Policy</Link>
                                        <Link href={"/terms-service"}>Terms of services</Link>
                                        <Link href={"/contact-us"}>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <p className="text-white opacity-60">Social</p>
                                    <hr className="text-white opacity-[8%] w-1/2 mt-2" />

                                    <div className="flex flex-col gap-y-2 text-white font-light mt-4">
                                        <a target="_blank" href="https://www.youtube.com/@raizzifyco">YouTube</a>
                                        <a target="_blank" href="https://instagram.com/raizzifyco">Instagram</a>
                                        <a target="_blank" href="https://www.linkedin.com/company/raizzifyco/">Linkedin</a>
                                        <a target="_blank" href="https://twitter.com/raizzifyco">Twitter (X)</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="text-white opacity-[8%] mt-10 mb-6" />

                    <div className="flex md:flex-row flex-col md:items-center items-start gap-2 justify-between text-white font-light text-sm">
                        <p className="md:opacity-70">Razzify Products and Service 2024, all rights reserved.</p>
                        <p className="opacity-70">Raising The Lifestyle, One Step At A Time</p>
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="text-center font-semibold text-[#3B3A3B] uppercase xl:text-[260px] lg:text-[200px] md:text-[150px] sm:text-[120px] xs:text-[100px] text-[70px] font-space-grotesk leading-none my-0 pt-16 h-full">
                            Raizzify
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Footer
