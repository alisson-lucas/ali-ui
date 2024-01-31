export const contact3 = `
<section id="contact" className="flex flex-row items-center justify-center relative w-full p-8 lg:p-20 py-20 bg-[slate-50]">
    <div className="flex flex-col items-center justify-center w-full max-w-7xl gap-6">
        <div className="flex flex-col lg:flex-row items-center justify-center relative w-full lg:py-20  rounded-tl-xl rounded-bl-xl  rounded-tr-xl rounded-br-xl">
            <div className="flex flex-col items-start justify-center p-10 gap-8 w-full lg:w-1/2 lg:h-96">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0C0C18] to-[#00ce18]">Vamos conversar!</h1>
                <p className="text-black text-base font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta placeat mollitia quia quisquam dolor illum voluptas accusantium adipisci iste odio vitae, perferendis aperiam, cupiditate rerum facilis dolorum rem nihil.</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-20 lg:p-20 w-full lg:w-1/2 gap-8">
                <form className="flex flex-col items-center justify-center w-full gap-6">
                    <input type="text" placeholder="Nome" name="" id="" className="bg-white w-full h-11 rounded-lg focus:outline-none border border-[#00CE18] p-3 py-7 text-black" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="E-mail" name="" id="" className="bg-white w-full h-11 rounded-lg focus:outline-none border border-[#00CE18] p-3 py-7 text-black" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="email" placeholder="Telefone" name="" id="" className="bg-white w-full h-11 rounded-lg focus:outline-none border border-[#00CE18] p-3 py-7 text-black" value={phone} onChange={e => setPhone(e.target.value)}/>
                    <button type="submit" className=" w-full bg-[#00CE18] hover:bg-[#3ea14a] rounded-lg p-4 py-8 text-lg font-bold text-white">Enviar</button>
                </form>
            </div>
        </div>
    </div>
</section>
`