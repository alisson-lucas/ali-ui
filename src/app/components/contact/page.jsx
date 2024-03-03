'use client'
import Examples from '@/components/Examples';
import Contact1 from '@/components/contacts/Contact1';
import Contact2 from '@/components/contacts/Contact2';
import Contact3 from '@/components/contacts/Contact3';
import Contact4 from '@/components/contacts/Contact4';

import { contact1 } from '@/utils/codes/contacts/contact1';
import { contact2 } from '@/utils/codes/contacts/contact2';
import { contact3 } from '@/utils/codes/contacts/contact3';
import { contact4 } from '@/utils/codes/contacts/contact4';

export default function Contact() {

  return (
    <>
      <div className='flex items-center justify-center bg-white text-black w-full h-full py-40 p-20'>
        <div className='flex flex-col items-start justify-center w-full container gap-10'>
          <span className='text-4xl font-semibold'>Contatos</span>

          <Examples title='Card a esquerda e formulário' code={contact1} component={<Contact1 />} />
          <Examples title='Card com formulário' code={contact2} component={<Contact2 />} />
          <Examples title='Formulário a direita e textos a esquerda' code={contact3} component={<Contact3 />} />
          <Examples title='Imagem a esquerda e formulário a direita' code={contact4} component={<Contact4 />} />
          
        </div>
      </div>
    </>
  )
}
