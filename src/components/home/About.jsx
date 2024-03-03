export default function About() {
    return (
        <div className="flex items-center justify-center w-full bg-white">
            <div className="flex flex-col items-center justify-between text-start gap-14 w-full lg:max-w-screen-lg 2xl:max-w-screen-xl py-10 lg:py-20 px-8 lg:px-20">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    O que é o Ali Ui?
                </h1>
                <span className='text-gray-700'>O Ali Ui é uma biblioteca de componentes onde o usuário vai ter acesso a uma variedade de componentes já testados, padronizados, <b>com 100% do foco em Responsividade</b> e prontos para uso. Todos os componentes são 100% customizaíveis e reutilizaíveis, evitando a necessidade do programador ficar repetindo códigos "padrões" sempre que for desenvolver um site ou uma Landing Page por exemplo.</span>
                <span className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad earum laborum accusamus molestias odio temporibus quasi nesciunt enim, minima accusantium distinctio, unde sit molestiae corporis necessitatibus omnis, veritatis culpa. Sapiente?</span>
                
                {/* <a
                    href="" target="_blank"
                    className="rounded-md bg-[#00CE18] px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#3ea14a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Entrar em contato
                </a> */}
            </div>
        </div>
    )
}