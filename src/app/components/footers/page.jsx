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
import Footer from '@/components/footers/Footer1';
import Footer2 from '@/components/footers/Footer2';
import Footer3 from '@/components/footers/Footer3';
import Footer4 from '@/components/footers/Footer4';

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
import { footer1 } from '@/utils/codes/footers/footer1';
import { footer2 } from '@/utils/codes/footers/footer2';
import { footer3 } from '@/utils/codes/footers/footer3';
import { footer4 } from '@/utils/codes/footers/footer4';

export default function Footers() {

  return (
    <>
      <div className='flex items-center justify-center bg-white text-black w-full h-full py-40 p-20'>
        <div className='flex flex-col items-start justify-center w-full container gap-10'>
          <span className='text-4xl font-semibold'>Footers</span>

          <Examples title='Logo, copyright e links' code={footer1} component={<Footer />} />
          <Examples title='Logo e copyright centralizados' code={footer4} component={<Footer4 />} />
          <Examples title='Logo, links e copyright centralizados' code={footer2} component={<Footer2 />} />
          <Examples title='Copyright e links' code={footer3} component={<Footer3 />} />

        </div>
      </div>
    </>
  )
}
