export default function Hero9() {
    return (
        <div className="relative w-full h-[840px]">
            {/* <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src="https://www.youtube.com/embed/7X8II6J-6mU;controls=0?autoplay=1&mute=1&loop=1"
            >
            </video> */}
            <iframe src="https://www.youtube.com/embed/7X8II6J-6mU;controls=0?autoplay=1&mute=1&loop=1" frameborder="0" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin"  className="w-full h-full object-cover"></iframe>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="flex flex-col gap-6 text-white text-center">
                    <h1 className="text-4xl font-bold mb-4">Melhore sua produtividade</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus nec metus volutpat convallis.</p>
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="" target="_blank"
                            className="rounded-md bg-[#00CE18] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3ea14a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Entrar em contato
                        </a>
                        <a
                            href="" target="_blank"
                            className="rounded-md border border-[#00CE18] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#00CE18] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Saiba mais <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
