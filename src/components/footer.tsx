
import Link from "next/link"
const Footer = () => {
    return (
        <div className="bg-footerBgColor md:pt-20 sm:pt-10 pt-8 pb-6 lg:px-14 px-4 sm:px-6 md:px-8 flex items-center justify-center">
            <div className="max-w-screen-2xl">
                <div className="flex md:flex-row flex-col items-start gap-y-6 justify-between w-full">
                    <div className="flex items-start md:w-[25%] flex-col gap-y-2">
                        <h1 className="uppercase font-semibold text-3xl text-primary">RAIZZIFY</h1>
                        <p className="text-white font-light text-sm opacity-60">Raizzify is a platform built for the salon industry to bridge the gap between salon owners and customers, bringing them closer while maintaining their customers’ go-to-salon habits.</p>
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
                                    <Link href={"/contact-us"}>Cantact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <p className="text-white opacity-60">Social</p>
                                <hr className="text-white opacity-[8%] w-1/2 mt-2" />

                                <div className="flex flex-col gap-y-2 text-white font-light mt-4">
                                    <p>You Tube</p>
                                    <p>Instagram</p>
                                    <p>Linkedin</p>
                                    <p>Facebook</p>
                                    <p>Twitter</p>
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
            </div>
        </div>
    )
}
export default Footer