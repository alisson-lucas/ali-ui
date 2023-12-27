export default function About2() {
    return (
        <div className="flex items-center justify-center w-full bg-white">
            <div className="flex flex-col lg:flex-row items-center justify-between text-start gap-10 w-full lg:max-w-screen-lg 2xl:max-w-screen-xl py-10 lg:py-20 px-14 lg:px-8">
                <img src="/images/man.jpg" alt="" className="w-[500px] object-contain" />
                <div className="flex flex-col items-center gap-8 w-full lg:w-1/2">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Quem sou eu
                    </h1>
                    <span className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>
                    <span className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>
                    <span className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>
                </div>
            </div>
        </div>
    )
}