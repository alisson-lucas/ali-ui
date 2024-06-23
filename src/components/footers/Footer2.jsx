import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Footer2() {
    return (
        <footer className="flex items-center justify-center w-full bg-white">
            <div className="flex flex-col items-center justify-center text-start gap-14 w-full container py-10 lg:py-10 px-8 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center justify-center w-full border-b border-b-black/30 py-8">
                    <div className="flex flex-col items-center justify-center gap-10">
                        <img src="/logo3.png" alt="" className="h-10" />

                        <div className="flex items-center justify-start gap-x-6">
                            <a
                                href=""
                                className="text-black hover:text-[#00CE18]"
                                target="_blank"
                            >
                                <AiFillGithub size='30px' />
                            </a>
                            <a href="" className="text-black hover:text-[#00CE18]" target="_blank">
                                <AiFillLinkedin size='30px' />
                            </a>
                            <a href="" className="text-black hover:text-[#00CE18]" target="_blank">
                                <AiOutlineInstagram size='30px' />
                            </a>
                        </div>
                    </div>
                </div>
                <span className="text-black text-sm">Copyright © {new Date().getFullYear()} Ali Ui</span>
            </div>
        </footer>
    )
}