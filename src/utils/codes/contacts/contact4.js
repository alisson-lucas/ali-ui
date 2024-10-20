export const contact4 = `
<section className="flex items-center justify-center relative w-full  bg-[#fefefd]">
    <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className='flex relative lg:w-1/2 h-auto'>
            <img src='/images/background2.jpg' width={900} height={800} className='block z-30' />
        </div>
        <div className="flex flex-col text-start gap-10 w-full lg:w-1/2 py-10 px-14 lg:px-20">
            <h1 className="text-4xl lg:text-4xl text-center font-bold tracking-tight text-gray-900">
                Vamos conversar!
            </h1>
            <span className='text-gray-700 text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>

            <div className="flex items-center justify-start gap-x-8">
                <form className="flex flex-col items-center justify-center w-full gap-6 px-8">
                    <input type="text" placeholder="Nome" name="" id="" className="bg-white w-full h-11 rounded-lg focus:outline-none border border-[#00CE18] p-3 py-7 text-black" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" name="" id="" className="bg-white w-full h-11 rounded-lg focus:outline-none border border-[#00CE18] p-3 py-7 text-black" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="email" placeholder="Telefone" name="" id="" className="bg-white w-full h-11 rounded-lg focus:outline-none border border-[#00CE18] p-3 py-7 text-black" value={phone} onChange={e => setPhone(e.target.value)} />
                    <button type="submit" className=" w-full bg-[#00CE18] hover:bg-[#3ea14a] rounded-lg p-4 text-lg font-bold text-white">Enviar</button>
                </form>
            </div>
        </div>
    </div>
</section>
`