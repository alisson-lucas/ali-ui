'use client'
import Examples from '@/components/Examples';
import Examples2 from '@/components/Examples2';
import Cta1 from '@/components/ctas/Cta1';
import Cta2 from '@/components/ctas/Cta2';
import Cta3 from '@/components/ctas/Cta3';
import Cta4 from '@/components/ctas/Cta4';
import Cta5 from '@/components/ctas/Cta5';

import { cta1 } from '@/utils/codes/ctas/cta1';
import { cta2 } from '@/utils/codes/ctas/cta2';
import { cta3 } from '@/utils/codes/ctas/cta3';
import { cta4 } from '@/utils/codes/ctas/cta4';
import { cta5 } from '@/utils/codes/ctas/cta5';

export default function Ctas() {

  return (
    <>
      <div className='flex items-center justify-center bg-white text-black w-full h-full py-40 p-20'>
        <div className='flex flex-col items-start justify-center w-full container gap-10'>
          <span className='text-4xl font-semibold'>CTA's</span>

          <Examples title='Botão no canto direito' code={cta1} component={<Cta1 />} />
          <Examples title='Botão no canto esquerdo' code={cta2} component={<Cta2 />} />
          <Examples title='Botões separados (Bom para mobile)' code={cta5} component={<Cta5 />} />
          <Examples title='Botões no canto direito' code={cta3} component={<Cta3 />} />
          <Examples title='Botões no canto esquerdo' code={cta4} component={<Cta4 />} />

        </div>
      </div>
    </>
  )
}
