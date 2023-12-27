'use client'
import Examples from '@/components/Examples';
import Examples2 from '@/components/Examples2';

import Feature from '@/components/features/Feature';
import Feature2 from '@/components/features/Feature2';
import Feature3 from '@/components/features/Feature3';
import Feature5 from '@/components/features/Feature5';
import Feature6 from '@/components/features/Feature6';
import Feature7 from '@/components/features/Feature7';
import Feature8 from '@/components/features/Feature8';
import Feature9 from '@/components/features/Feature9';
import Feature4 from '@/components/features/Features4';
import Numbers1 from '@/components/numbers/Numbers1';

import { feature1 } from '@/utils/codes/features/feature1';
import { feature2 } from '@/utils/codes/features/feature2';
import { feature3 } from '@/utils/codes/features/feature3';
import { feature4 } from '@/utils/codes/features/feature4';
import { feature5 } from '@/utils/codes/features/feature5';
import { feature6 } from '@/utils/codes/features/feature6';
import { feature7 } from '@/utils/codes/features/feature7';
import { feature8 } from '@/utils/codes/features/feature8';
import { feature9 } from '@/utils/codes/features/feature9';
import { numbers1 } from '@/utils/codes/numbers/numbers1';

export default function Numbers() {

  return (
    <>
      <div className='flex items-center justify-center bg-white text-black w-full h-full py-40 p-20'>
        <div className='flex flex-col items-start justify-center w-full container gap-10'>
          <span className='text-4xl font-semibold'>Números</span>

          <Examples title='Cards numéricos' code={numbers1} component={<Numbers1 />} />
          <Examples title='Cards numéricos' code={feature7} component={<Feature7 />} />
          <Examples title='Textos a esquerda, itens numéricos e cta' code={feature6} component={<Feature6 />} />

        </div>
      </div>
    </>
  )
}
