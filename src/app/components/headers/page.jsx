'use client'
import Examples from '@/components/Examples';
import Header from '@/components/headers/Header';
import Header2 from '@/components/headers/Header2';
import Header3 from '@/components/headers/Header3';
import Header4 from '@/components/headers/Header4';
import Header5 from '@/components/headers/Header5';
import Header6 from '@/components/headers/Header6';
import Header7 from '@/components/headers/Header7';
import Header8 from '@/components/headers/Header8';
import Header9 from '@/components/headers/Header9';
import Header10 from '@/components/headers/Header10';

import { header } from '@/utils/codes/headers/header';
import { header2 } from '@/utils/codes/headers/header2';
import { useState } from 'react';
import { header3 } from '@/utils/codes/headers/header3';
import { header4 } from '@/utils/codes/headers/header4';
import { header5 } from '@/utils/codes/headers/header5';
import { header6 } from '@/utils/codes/headers/header6';
import { header7 } from '@/utils/codes/headers/header7';
import { header8 } from '@/utils/codes/headers/header8';
import { header9 } from '@/utils/codes/headers/header9';
import { header10 } from '@/utils/codes/headers/header10';

export default function Headers() {

  return (
    <>
      <div className='flex items-center justify-center bg-white text-black w-full h-full py-40 p-20 px-10'>
        <div className='flex flex-col items-start justify-center w-full container gap-10'>
          <span className='text-4xl font-semibold'>Headers</span>

          <Examples title='Logo e menu' code={header} component={<Header />} />
          <Examples title='Logo, menu e cta' code={header2} component={<Header2 />} />
          <Examples title='Logo e menu a direita' code={header10} component={<Header10 />} />
          <Examples title='Logo e menu a esquerda' code={header3} component={<Header3 />} />
          <Examples title='Logo, menu e ctas de contato' code={header4} component={<Header4 />} />
          <Examples title='Menu, logo e ctas de contato' code={header5} component={<Header5 />} />
          <Examples title='Logo e ctas de contato' code={header6} component={<Header6 />} />
          <Examples title='Logo entre ctas' code={header7} component={<Header7 />} />
          <Examples title='Apenas logo centralizado' code={header8} component={<Header8 />} />
          <Examples title='bordas arredondadas' code={header9} component={<Header9 />} />

        </div>
      </div>
    </>
  )
}
