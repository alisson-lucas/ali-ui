export const hero3 = `
<div style={{
    '--image-url': 'url('/images/background1.jpg')', 
}} className="flex items-center justify-center relative w-full  px-6 py-14 lg:px-8  bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat after:content[''] after:absolute after:bg-black/[.27] after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20">
    <div className="flex flex-col lg:flex-row items-center justify-center w-full container py-28 z-30">
        <div className="flex flex-col text-center items-center justify-center gap-10 w-full lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white sm:text-6xl">
                Melhore sua produtividade
            </h1>
            <span className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>

            <div className="flex items-center justify-start gap-x-8">
                <a
                    href="" target="_blank"
                    className="rounded-md bg-[#00CE18] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3ea14a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Entrar em contato
                </a>
                <a
                    href="" target="_blank"
                    className="rounded-md border border-[#00CE18] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#00CE18] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Saiba mais <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    </div>
</div>
`