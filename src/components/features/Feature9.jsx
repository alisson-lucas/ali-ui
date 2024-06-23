export default function Feature9() {
    return (
        <div className='w-full flex flex-row items-center justify-center flex-wrap bg-white p-10 lg:p-20' >
            <div className="flex flex-col w-full container items-center justify-center gap-10 lg:gap-20">
                <div className="relative flex flex-row flex-wrap w-full min-h-[300px] items-center justify-center gap-10">
                    <article className="absolute -top-60 left-4 flex flex-col items-center justify-center w-full lg:w-[calc(100%/3-30px)] gap-6 py-6 p-4">
                        <img src="https://picsum.photos/320" className="w-80 h-80" alt="imagem" />
                        <div className="flex flex-col items-start justify-center w-full 2xl:px-10 gap-8">
                            <span className="text-base text-black font-semibold">Praticidade</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi</p>
                        </div>
                    </article>
                    <article className="absolute -top-60 flex flex-col items-center justify-center w-full lg:w-[calc(100%/3-30px)] gap-6 py-6 p-4">
                        <img src="https://picsum.photos/320" className="w-80 h-80" alt="imagem" />
                        <div className="flex flex-col items-start justify-center w-full 2xl:px-10 gap-8">
                            <span className="text-base text-black font-semibold">Performance</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi</p>
                        </div>
                    </article>
                    <article className="absolute -top-60 right-4 flex flex-col items-center justify-center w-full lg:w-[calc(100%/3-30px)] gap-6 py-6 p-4">
                        <img src="https://picsum.photos/320" className="w-80 h-80" alt="imagem" />
                        <div className="flex flex-col items-start justify-center w-full 2xl:px-10 gap-8">
                            <span className="text-base text-black font-semibold">Criatividade</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi</p>
                        </div>
                    </article>
                </div>

                <div className="flex flex-col items-center justify-center text-center lg:justify-between w-full px-20 gap-20">
                    <h1 className="text-5xl lg:text-6xl leading-relaxed font-bold text-black">Aproveite tudo que oferecemos de melhor</h1>
                    <span className='text-gray-700 text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>
                </div>

            </div>
        </div>
    )
}