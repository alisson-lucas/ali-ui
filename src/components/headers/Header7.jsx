export default function Header7() {
    return (
        <>
            <header className="relative inset-x-0 z-50 bg-white">
                <div className='flex flex-row items-center justify-center w-full shadow-lg shadow-black/5'>
                    <nav className="lg:max-w-screen-xl 2xl:max-w-screen-2xl flex items-center justify-between p-6 lg:px-8 w-full z-50 relative" aria-label="Global">
                        <div className='lg:flex hidden'>
                            <a href="" className='flex items-center justify-center py-2 px-6 min-h-[56px] rounded-xl bg-[#0C0C18] text-white font-bold text-sm'>Ligue agora <br /> (99) 99999-9999 </a>
                        </div>
                        <div className="flex">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-10 w-auto"
                                    src="/logo.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className='lg:flex hidden'>
                            <a href="" className='flex items-center justify-center py-2 px-6 min-h-[56px] rounded-xl bg-[#04CD19] text-white font-bold text-sm'>Envie uma mensagem</a>
                        </div>
                    </nav>
                </div>
            </header>
            <a href="" className='flex w-16 h-16 rounded-full bg-[#0C0C18] absolute left-4 bottom-4 lg:hidden'></a>
            <a href="" className='flex w-16 h-16 rounded-full bg-[#04CD19] absolute right-4 bottom-4 lg:hidden'></a>
        </>
    )
}
