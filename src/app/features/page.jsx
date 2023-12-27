'use client'
import Examples from '@/components/Examples';
import Examples2 from '@/components/Examples2';

import Feature from '@/components/features/Feature';
import Features10 from '@/components/features/Feature10';
import Feature2 from '@/components/features/Feature2';
import Feature3 from '@/components/features/Feature3';
import Feature5 from '@/components/features/Feature5';
import Feature6 from '@/components/features/Feature6';
import Feature7 from '@/components/features/Feature7';
import Feature8 from '@/components/features/Feature8';
import Feature9 from '@/components/features/Feature9';
import Feature4 from '@/components/features/Features4';

import { feature1 } from '@/utils/codes/features/feature1';
import { feature10 } from '@/utils/codes/features/feature10';
import { feature2 } from '@/utils/codes/features/feature2';
import { feature3 } from '@/utils/codes/features/feature3';
import { feature4 } from '@/utils/codes/features/feature4';
import { feature5 } from '@/utils/codes/features/feature5';
import { feature6 } from '@/utils/codes/features/feature6';
import { feature7 } from '@/utils/codes/features/feature7';
import { feature8 } from '@/utils/codes/features/feature8';
import { feature9 } from '@/utils/codes/features/feature9';

export default function Features() {

  return (
    <>
      <div className='flex items-center justify-center bg-white text-black w-full h-full py-40 p-20'>
        <div className='flex flex-col items-start justify-center w-full container gap-10'>
          <span className='text-4xl font-semibold'>Features</span>

          <Examples title='Cards com mudança de cor' code={feature1} component={<Feature />} />
          <Examples title='Itens apenas com títulos' code={feature2} component={<Feature2 />} />
          <Examples title='Itens com titulo e descrição' code={feature5} component={<Feature5 />} />
          <Examples title='Textos a esquerda e itens a direita' code={feature3} component={<Feature3 />} />
          <Examples title='Título ao lado de descrição e cards abaixo' code={feature4} component={<Feature4 />} />
          <Examples2 title='Cards fora do container' code={feature10} component={<Features10 />} />
          <Examples2 title='Cards fora do container e textos embaixo' code={feature9} component={<Feature9 />} />
          <Examples title='Imagens e textos alternados' code={feature8} component={<Feature8 />} />

        </div>
      </div>
    </>
  )
}
