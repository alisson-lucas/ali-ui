export default function Hero5() {
    return (
        <div style={{
            '--image-url': `url('/images/background3.png')`, '--image-url-mobile': `url('/images/banner.png')`,
        }} className="flex items-center justify-center relative w-full shadow-lg isolate px-6 py-14 2xl:py-28 lg:px-8 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:max-w-screen-lg 2xl:max-w-screen-xl py-28">
                <div className="flex flex-col text-start gap-10 w-full lg:w-1/2">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Melhore sua produtividade
                    </h1>
                    <span className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>

                    <div className="flex items-center justify-start gap-x-8">
                        <a
                            href="https://wa.me/5581984255222?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21" target="_blank"
                            className="rounded-md bg-[#00CE18] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3ea14a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Entrar em contato
                        </a>
                        <a
                            href="https://wa.me/5581984255222?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21" target="_blank"
                            className="rounded-md border border-[#00CE18] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#00CE18] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Saiba mais <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className='flex relative'>
                </div>
            </div>
        </div>
    )
}