export default function Hero() {
    return (

        <div className="flex items-center justify-center relative w-full  isolate mt-20 px-6 py-14 lg:px-8 bg-[#fefefd]">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#99bfa9] to-[#007a33] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:max-w-screen-lg 2xl:max-w-screen-xl gap-20 py-10 lg:py-28">
                <div className="flex flex-col text-start gap-10 w-full lg:w-1/2">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Tudo o que você precisa para melhorar a sua produtividade em um só lugar
                    </h1>
                    <span className='text-gray-700'>Com o Ali UI você pode criar seus projetos de maneira eficaz e eficiente com o foco em sua produtividade permitindo entregas mais rapidas, trazendo mais lucros para o desenvolvedor e satisfação para o cliente.</span>

                    <div className="flex items-center justify-start gap-x-8">
                        <a
                            href="/components/headers"
                            className="rounded-md bg-[#00CE18] px-8 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-[#3ea14a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Ver componentes
                        </a>
                        <a
                            href="#howtouse"
                            className="rounded-md border border-[#00CE18] px-3.5 py-2.5 text-lg font-semibold text-black shadow-sm hover:bg-[#00CE18] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Como usar <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className='flex relative'>
                    <img src='/images/homem3d.jpg' width={450} height={367} className='block z-30 rounded-lg' />
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#99bfa9] to-[#007a33] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}