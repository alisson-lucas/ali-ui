export default function Feature() {
    return (
        <div className="flex flex-row items-center justify-center w-full bg-gradient-to-b bg-white p-8 pt-20 lg:p-20 pb-20 lg:pb-40 ">
            <div className="flex flex-col w-full max-w-7xl gap-6">
                <div className="flex flex-col items-center justify-center gap-14">
                    <span className="flex flex-row items-center justify-start text-xl font-bold text-black"> Serviços</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-black">O que oferecemos</h2>
                    <p className="text-base text-[#646464]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed numquam fugiat nulla vero perspiciatis optio, omnis molestiae voluptatum saepe fugit ipsam maxime sequi assumenda sit, dolorem eos molestias cumque.</p>
                    <div className="flex flex-row flex-wrap items-center justify-center lg:justify-between gap-10">
                        <article  className="flex flex-col w-full lg:h-[320px] max-w-xs lg:max-w-[calc(100%/3-40px)] rounded-xl border-2 border-[#c1f6af] hover:bg-[#c1f6af] p-10 gap-4">
                            <span className="text-xl font-bold text-black">velocidade</span>
                            <p className="text-base font-normal text-[#646464]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quod et consectetur iusto officia quia minus in harum, voluptatum cum dolores amet tempore tenetur, quam eos porro exercitationem excepturi debitis.</p>
                        </article>
                        <article  className="flex flex-col w-full lg:h-[320px] max-w-xs lg:max-w-[calc(100%/3-40px)] rounded-xl border-2 border-[#c1f6af] hover:bg-[#c1f6af] p-10 gap-4">
                            <span className="text-xl font-bold text-black">Produtividade</span>
                            <p className="text-base font-normal text-[#646464]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quod et consectetur iusto officia quia minus in harum, voluptatum cum dolores amet tempore tenetur, quam eos porro exercitationem excepturi debitis.</p>
                        </article>
                        <article  className="flex flex-col w-full lg:h-[320px] max-w-xs lg:max-w-[calc(100%/3-40px)] rounded-xl border-2 border-[#c1f6af] hover:bg-[#c1f6af] p-10 gap-4">
                            <span className="text-xl font-bold text-black">trabalho em equipe</span>
                            <p className="text-base font-normal text-[#646464]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quod et consectetur iusto officia quia minus in harum, voluptatum cum dolores amet tempore tenetur, quam eos porro exercitationem excepturi debitis.</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}