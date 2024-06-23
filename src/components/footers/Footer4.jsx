import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Footer2() {
    return (
        <footer className="flex items-center justify-center w-full bg-white">
            <div className="flex flex-col items-center justify-center text-start gap-2 w-full container py-10 lg:py-8 px-8 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center justify-center w-fullpy-8">
                    <div className="flex flex-col items-center justify-center gap-10">
                        <img src="/logo3.png" alt="" className="h-10" />
                    </div>
                </div>
                <span className="text-black text-sm">Copyright © {new Date().getFullYear()} Ali Ui</span>
            </div>
        </footer>
    )
}