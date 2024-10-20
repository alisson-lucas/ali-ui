import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'
import SideMenuContainer from '@/components/SideMenuContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ali UI',
  description: '',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='h-14'>
          <Header />
        </div>
        <div className='relative flex flex-row w-full'>
          <SideMenuContainer />
          <div className='flex-1 flex-col z-20'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
