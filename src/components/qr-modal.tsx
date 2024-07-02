import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import qrcode from '../../public/images/QRCode.png'
interface QrModalProps {
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}
const QrModal = ({ title, open, setOpen }: QrModalProps) => {

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-[400px] overflow-hidden">
                <DialogHeader className="py-4">
                    <DialogTitle className="text-center">Scan QR Code</DialogTitle>
                    <DialogDescription>
                        <div className="relative">
                            <div className="flex flex-col items-center text-center">
                                <p className="w-[70%]">
                                    Scan this QR  to Download Raizzify App on your {title} Device.
                                </p>
                                <div className="border-primary border-2 mt-4 rounded-md flex items-center justify-center bg-[#F3FBFC] w-[200px] h-[200px]">
                                    <Image src={qrcode} alt="" className="w-[180px] h-[180px]" />
                                </div>
                            </div>
                            <div className="w-64 h-64 z-[-1] rounded-full bg-[#F3FBFC] absolute -top-[131px] -left-[112px]">

                            </div>
                            <div className="w-52 h-52 z-[-1] rounded-full bg-[#D8F5F9] absolute -top-[8.5rem] -left-[7.5rem]">

                            </div>
                            <div className="w-40 h-40 z-[-1] rounded-full bg-primary absolute -top-36 -left-32">

                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default QrModal