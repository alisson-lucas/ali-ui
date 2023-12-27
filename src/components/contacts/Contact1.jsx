'use client'
import { PiDotFill } from "react-icons/pi";
// import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineLinkedin, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
// import axios from 'axios';

export default function Contact1() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [btnText, setBtnText] = useState('Contate-nos')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter()

    // const sendLead = () => {
    //     setBtnText('Enviando...')
    //     const data = {
    //         name,
    //         email,
    //     }

    //     console.log(data)

    //     axios.post('/api/mail',
    //         data
    //     )
    //         .then(function (response) {
    //             // router.push('/obrigado')
    //             resetForm();
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    // function resetForm() {
    //     setName('')
    //     setEmail('')
    // }

    return (
        <section id="contact" className="flex flex-row items-center justify-center relative w-full p-8 lg:p-20 py-20 bg-slate-50">
            <div className="flex flex-col items-center justify-center w-full max-w-7xl gap-6">
                <span data-aos="fade-up" data-aos-duration="1000" className="flex flex-row items-center justify-start text-xl font-bold text-black"> <PiDotFill className="text-[#00CE18]" /> Contato</span>
                <div className="flex flex-col lg:flex-row items-center justify-center relative w-full lg:py-20">
                    <div data-aos="flip-up" data-aos-duration="1000" className="flex flex-col items-start justify-center p-10 gap-8 w-full lg:w-1/2 lg:h-96 bg-gradient-to-tr from-[#0C0C18] to-[#00ce18] rounded-tl-xl rounded-bl-xl  rounded-tr-xl rounded-br-xl">
                        <h1 className="text-white text-5xl font-bold">Vamos conversar!</h1>
                        <p className="text-white text-base font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta placeat mollitia quia quisquam dolor illum voluptas accusantium adipisci iste odio vitae, perferendis aperiam, cupiditate rerum facilis dolorum rem nihil.</p>
                    </div>
                    <div data-aos="flip-down" data-aos-duration="1000" className="flex flex-col items-center justify-center pt-20 lg:p-20 w-full lg:w-1/2 gap-8">
                        <form className="flex flex-col items-center justify-center w-full gap-6">
                            <input type="text" placeholder="Nome" name="" id="" className="bg-white w-full h-11 rounded-lg focus:outline-none border border-[#00CE18] p-3 py-7 text-black" value={name} onChange={e => setName(e.target.value)}/>
                            <input type="email" placeholder="E-mail" name="" id="" className="bg-white w-full h-11 rounded-lg focus:outline-none border border-[#00CE18] p-3 py-7 text-black" value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type="email" placeholder="Telefone" name="" id="" className="bg-white w-full h-11 rounded-lg focus:outline-none border border-[#00CE18] p-3 py-7 text-black" value={phone} onChange={e => setPhone(e.target.value)}/>
                            <button type="submit" className=" w-full bg-[#00CE18] hover:bg-[#3ea14a] rounded-lg p-4 text-base font-bold text-white">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}