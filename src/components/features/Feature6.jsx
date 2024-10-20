export default function Feature6() {
    return (
        <div className="flex items-center justify-center w-full bg-white">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8 container py-10 lg:py-20 px-8 lg:px-14">
                <div className="flex flex-col text-start gap-10 w-full lg:w-1/2 ">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                        Aproveite tudo que oferecemos de melhor
                    </h1>
                    <span className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>


                </div>
                <div className="flex flex-col items-start justify-center w-full lg:w-1/2 gap-14 py-4 lg:px-10">
                    <div className="flex flex-wrap items-center justify-center w-full gap-14 py-4 lg:px-10">
                        <article className="flex flex-col items-start justify-center gap-4 py-4 w-[calc(100%/2-30px)]">
                            <span className="font-bold text-3xl text-start lg:text-4xl text-black">80%</span>
                            <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </article>
                        <article className="flex flex-col items-start justify-center gap-4 py-4 w-[calc(100%/2-30px)]">
                            <span className="font-bold text-3xl lg:text-4xl text-black"><small className="text-xl">R$</small>55<small className="text-xl">mi</small></span>
                            <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </article>
                        <article className="flex flex-col items-start justify-center gap-4 py-4 w-[calc(100%/2-30px)]">
                            <span className="font-bold text-3xl text-start lg:text-4xl text-black">80%</span>
                            <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </article>
                        <article className="flex flex-col items-start justify-center gap-4 py-4 w-[calc(100%/2-30px)]">
                            <span className="font-bold text-3xl lg:text-4xl text-black">95%</span>
                            <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </article>
                    </div>
                    <div className="flex items-center justify-start gap-x-8 lg:px-10">
                        <a
                            href="" target="_blank"
                            className="rounded-md bg-[#00CE18] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3ea14a] "
                        >
                            Entrar em contato
                        </a>
                        <a
                            href="" target="_blank"
                            className="rounded-md border border-[#00CE18] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#00CE18] hover:text-white "
                        >
                            Saiba mais <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}