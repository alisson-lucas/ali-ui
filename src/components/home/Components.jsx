export default function Components() {
    return (
        <>
            <div className="flex items-center justify-center relative w-full px-6 pt-14 pb-8 lg:px-8  bg-[url('/images/background1.jpg')] bg-cover bg-center bg-no-repeat after:content[''] after:absolute after:bg-gradient-to-t after:from-black after:to-transparent after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20">
                <div className="flex flex-col lg:flex-row items-end justify-center w-full lg:min-h-[600px] lg:max-w-screen-lg 2xl:max-w-screen-xl py-28 pb-0 z-30">
                    <div className="flex flex-col text-center items-center justify-end gap-10 w-full lg:w-1/2 ">
                        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white sm:text-6xl">
                            Componentes
                        </h1>
                        <span className='text-gray-300'>Na àrea dos componentes, temos uma lista de opções de componentes que o usuário pode escolher, reutilizar e customizar da maneira que achar necessário, como por exemplo:</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full bg-white p-8 py-20 lg:p-20 lg:pb-40 ">
                <div className="flex flex-col items-start justify-center w-full px-10 lg:max-w-screen-xl 2xl:max-w-screen-2xl gap-6">
                    <h3 className="text-5xl font-bold text-black">Headers</h3>
                    <h3 className="text-5xl font-bold text-black">Banners</h3>
                    <div className="flex items-center justify-center w-full">
                        <img src="/images/home/ban1.png" alt="" />
                    </div>
                    <h3 className="text-5xl font-bold text-black">Sobre</h3>
                    <div className="flex items-center justify-center w-full">
                        <img src="/images/home/ab1.png" alt="" />
                    </div>
                    <h3 className="text-5xl font-bold text-black">Contatos</h3>
                    <div className="flex items-center justify-center w-full">
                        <img src="/images/home/ban1.png" alt="" />
                    </div>
                    <h3 className="text-5xl font-bold text-black">Footers</h3>
                    <div className="flex items-center justify-center w-full">
                        <img src="/images/home/ban1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}