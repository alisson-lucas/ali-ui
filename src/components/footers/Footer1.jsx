'use client'
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {

    return (
        <footer className="flex flex-row items-center justify-center shadow-xl w-full bg-white p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl">

                <img
                    className="h-10 w-auto"
                    src='/logo3.png'
                    alt=""
                />

                <span className="text-slate-600 text-sm">Copyright © {new Date().getFullYear()} Ali Ui</span>

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
        </footer>
    )
}