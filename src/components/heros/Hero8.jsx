export default function Hero8() {
    return (
        <div className="flex items-center justify-center relative w-full shadow-lg isolate px-6 pt-14 pb-8 lg:px-8  bg-[url('/images/background1.jpg')] bg-cover bg-center bg-no-repeat after:content[''] after:absolute after:bg-gradient-to-t after:from-black after:to-transparent after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20">
            <div className="flex flex-col lg:flex-row items-end justify-center w-full lg:min-h-[600px] lg:max-w-screen-lg 2xl:max-w-screen-xl py-28 pb-0 z-30">
                <div className="flex flex-col text-center items-center justify-end gap-10 w-full lg:w-1/2 ">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white sm:text-6xl">
                        Melhore sua produtividade
                    </h1>
                    <span className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>
                </div>
            </div>
        </div>
    )
}
