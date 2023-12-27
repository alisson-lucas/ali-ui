export const header5 = `
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Nos conheça', href: '#mission' },
    { name: 'Planos', href: '#plans' },
    { name: 'Projetos', href: '#projects' },
    
]

export default function Header5() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="relative inset-x-0 top-0 z-50 bg-white">
                <div className='flex flex-row items-center justify-center w-full shadow-lg shadow-black/5'>
                    <nav className="lg:max-w-screen-xl 2xl:max-w-screen-2xl flex items-center justify-between p-6 lg:px-8 w-full z-50 gap-6 relative" aria-label="Global">
                        <div className="hidden lg:flex lg:gap-x-4">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-base hover:text-accent font-semibold leading-6 text-black">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-10 w-auto"
                                    src="/logo.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
                            </button>
                        </div>
                        <div className='lg:flex gap-6 hidden'>
                            <a href="" className='flex items-center justify-center py-2 px-6 rounded-xl bg-[#0C0C18] text-white font-bold text-sm'>Ligue agora <br /> (99) 99999-9999 </a>
                            <a href="" className='flex items-center justify-center py-2 px-6 rounded-xl bg-[#04CD19] text-white font-bold text-sm'>Envie uma mensagem</a>
                        </div>
                    </nav>
                </div>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="/logo.svg"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <a href="" className='flex w-16 h-16 rounded-full bg-[#0C0C18] absolute left-4 bottom-4 lg:hidden'></a>
            <a href="" className='flex w-16 h-16 rounded-full bg-[#04CD19] absolute right-4 bottom-4 lg:hidden'></a>
        </>
    )
}
`