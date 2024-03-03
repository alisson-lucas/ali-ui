import { Inter } from 'next/font/google'
// import '../globals.css'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ali UI',
  description: '',
}

export default function ComponetsLayout({ children }) {
  return (
    <div lang="en">
      <div className={inter.className}>
        <Header />
        <div className='relative flex flex-row w-full'>
          <SideMenu />
          {children}
        </div>
      </div>
    </div>
  )
}
