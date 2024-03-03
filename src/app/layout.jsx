import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ali UI',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
          {/* <SideMenu /> */}
          {children}
      </body>
    </html>
  )
}
