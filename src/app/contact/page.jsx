'use client'
import Examples from '@/components/Examples';
import Contact1 from '@/components/contacts/Contact1';

import { hero } from '@/utils/codes/heros/hero';

export default function Contact() {

  return (
    <>
      <div className='flex items-center justify-center bg-white text-black w-full h-full py-40 p-20'>
        <div className='flex flex-col items-start justify-center w-full container gap-10'>
          <span className='text-4xl font-semibold'>Sobre</span>

          <Examples title='Textos a esquerda e imagem' code={hero} component={<Contact1 />} />
          
        </div>
      </div>
    </>
  )
}
