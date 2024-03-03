'use client'
import Examples from '@/components/Examples';
import About1 from '@/components/abouts/About1';
import About2 from '@/components/abouts/About2';
import About3 from '@/components/abouts/About3';
import About4 from '@/components/abouts/About4';
import About5 from '@/components/abouts/About5';

import { about1 } from '@/utils/codes/abouts/about1';
import { about2 } from '@/utils/codes/abouts/about2';
import { about3 } from '@/utils/codes/abouts/about3';
import { about4 } from '@/utils/codes/abouts/about4';
import { about5 } from '@/utils/codes/abouts/about5';

export default function Heros() {

  return (
    <>
      <div className='flex items-center justify-center bg-white text-black w-full h-full py-40 p-20'>
        <div className='flex flex-col items-start justify-center w-full container gap-10'>
          <span className='text-4xl font-semibold'>Sobre</span>

          <Examples title='Titulo, textos e cta' code={about1} component={<About1 />} />
          <Examples title='Titulo, textos e cta com imagem de fundo' code={about2} component={<About5 />} />
          <Examples title='Foto e textos descritivos' code={about3} component={<About2 />} />
          <Examples title='Imagem a esquerda e textos a direita' code={about4} component={<About3 />} />
          <Examples title='Textos a esquerda e imagem a direita' code={about5} component={<About4 />} />
          
        </div>
      </div>
    </>
  )
}
