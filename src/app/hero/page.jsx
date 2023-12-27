'use client'
import Examples from '@/components/Examples';
import Hero4 from '@/components/heros/Hero4';
import Hero from '@/components/heros/Hero';
import Hero2 from '@/components/heros/Hero2';
import Hero3 from '@/components/heros/Hero3';
import Hero5 from '@/components/heros/Hero5';
import Hero6 from '@/components/heros/Hero6';

import { hero } from '@/utils/codes/heros/hero';
import { hero2 } from '@/utils/codes/heros/hero2';
import { hero3 } from '@/utils/codes/heros/hero3';
import { hero4 } from '@/utils/codes/heros/hero4';
import { hero6 } from '@/utils/codes/heros/hero6';
import { hero5 } from '@/utils/codes/heros/hero5';
import Hero7 from '@/components/heros/Hero7';
import Hero8 from '@/components/heros/Hero8';
import { hero7 } from '@/utils/codes/heros/hero7';
import { hero8 } from '@/utils/codes/heros/hero8';

export default function Heros() {

  return (
    <>
      <div className='flex items-center justify-center bg-white text-black w-full h-full py-40 p-20'>
        <div className='flex flex-col items-start justify-center w-full container gap-10'>
          <span className='text-4xl font-semibold'>Hero</span>

          <Examples title='Textos a esquerda e imagem' code={hero} component={<Hero />} />
          <Examples title='Textos centralizados' code={hero2} component={<Hero2 />} />
          <Examples title='Textos centralizados e imagem de fundo' code={hero3} component={<Hero3 />} />
          <Examples title='Tela dividida entre texto e imagem' code={hero4} component={<Hero4 />} />
          <Examples title='Tela dividida entre texto e imagem' code={hero6} component={<Hero6 />} />
          <Examples title='Textos a esquerda com imagem de fundo' code={hero5} component={<Hero5 />} />
          <Examples title='Apenas imagem com sombra' code={hero7} component={<Hero7 />} />
          <Examples title='Imagem com sombra e texto embaixo' code={hero8} component={<Hero8 />} />
          
        </div>
      </div>
    </>
  )
}
