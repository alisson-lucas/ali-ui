export default function About5() {
    return (
        <div className="flex items-center justify-center w-full bg-[url('/images/peoples.jpg')] bg-cover bg-no-repeat after:content[''] after:absolute after:bg-black/[.50] after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20">
            <div className="flex flex-col items-center justify-between text-start  gap-14 w-full lg:max-w-screen-lg 2xl:max-w-screen-xl py-10 lg:py-20 px-8 lg:px-20 z-30">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white sm:text-6xl">
                    Somos a melhor escolha
                </h1>
                <span className='text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>
                <span className='text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad earum laborum accusamus molestias odio temporibus quasi nesciunt enim, minima accusantium distinctio, unde sit molestiae corporis necessitatibus omnis, veritatis culpa. Sapiente?</span>
                <span className='text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad earum laborum accusamus molestias odio temporibus quasi nesciunt enim, minima accusantium distinctio, unde sit molestiae corporis necessitatibus omnis, veritatis culpa. Sapiente?</span>
                <a
                    href="" target="_blank"
                    className="rounded-md bg-[#00CE18] px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#3ea14a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Entrar em contato
                </a>
            </div>
        </div>
    )
}