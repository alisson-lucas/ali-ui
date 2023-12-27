'use client'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Resizable } from 're-resizable';
import { MdOutlineContentCopy, MdDone, MdOutlineRemoveRedEye } from 'react-icons/md';
import { header } from '@/utils/codes/headers/header';
import { useState } from 'react';

import Header from '@/components/headers/Header';


export default function Examples2(props) {
    const [code, setCode] = useState(false)
    const [copied, setCopied] = useState(false)

    return (
        <div className='flex flex-col w-full rounded-lg py-4 gap-2 z-40'>
            <div className={`w-full flex items-center justify-between ${code ? 'mb-0' : 'mb-40'} py-2`}>
                <span className='ml-4 mb-2 font-semibold text-lg'>{props.title}</span>
                <div className='flex items-center justify-end gap-4 z-50'>
                    <button className={`flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-lg text-sm ${code ? 'bg-[#888888]' : 'bg-[#04CD19]'}`} onClick={() => setCode(false)}><MdOutlineRemoveRedEye /> Preview</button>
                    <button className={`flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-lg text-sm ${code ? 'bg-[#04CD19]' : 'bg-[#888888]'}`} onClick={() => setCode(true)}><MdOutlineRemoveRedEye /> Código</button>
                </div>
            </div>
            {code ?
                <div className='w-full rounded-xl bg-[#282C34] p-2'>
                    <div className='flex w-full justify-end'>
                        {copied ?
                            <span className='flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-lg text-sm bg-slate-500'><MdDone /> Copiado!</span>
                            :
                            <button className='flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-lg text-sm bg-slate-500' onClick={() => {
                                navigator.clipboard.writeText(props.code)
                                setCopied(true)
                                setTimeout(() => {
                                    setCopied(false)
                                }, 4000);
                            }}><MdOutlineContentCopy /> Copiar</button>
                        }
                    </div>
                    <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLongLines={true} customStyle={{ padding: 20 }}>
                        {props.code}
                    </SyntaxHighlighter>
                </div>
                :
                <Resizable
                    className='bg-[#eceaea] relative border border-accent rounded-lg'
                    defaultSize={{
                        width: '100%',
                        height: 'auto',
                    }}
                    maxWidth='100%'
                    minWidth='640px'
                >
                    {props.component}
                </Resizable>
            }
        </div>
    )
}