export default function Feature2() {
    return (
        <div className='w-full flex flex-row items-center justify-center flex-wrap bg-white p-10 lg:p-20' >
            <div className="flex flex-col w-full container items-center justify-center gap-10 lg:gap-20">

                <h1 className="text-5xl lg:text-6xl text-center leading-relaxed font-bold text-black">Aproveite tudo que oferecemos de melhor</h1>
                <span className='text-gray-700 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>

                <div className="flex flex-row flex-wrap w-full items-center justify-center gap-10">
                    <article className="flex flex-col items-center justify-center w-full lg:w-[calc(100%/4-30px)] gap-6 py-6 p-4">
                        <img src="/logo.png" className="w-auto h-20" alt="imagem" />
                        <span className="text-base text-black font-semibold">Praticidade</span>
                    </article>
                    <article className="flex flex-col items-center justify-center w-full lg:w-[calc(100%/4-30px)] gap-6 py-6 p-4">
                        <img src="/logo.png" className="w-auto h-20" alt="imagem" />
                        <span className="text-base text-black font-semibold">Performance</span>
                    </article>
                    <article className="flex flex-col items-center justify-center w-full lg:w-[calc(100%/4-30px)] gap-6 py-6 p-4">
                        <img src="/logo.png" className="w-auto h-20" alt="imagem" />
                        <span className="text-base text-black font-semibold">Criatividade</span>
                    </article>
                    <article className="flex flex-col items-center justify-center w-full lg:w-[calc(100%/4-30px)] gap-6 py-6 p-4">
                        <img src="/logo.png" className="w-auto h-20" alt="imagem" />
                        <span className="text-base text-black font-semibold">Produtividade</span>
                    </article>
                </div>
            </div>
        </div>
    )
}