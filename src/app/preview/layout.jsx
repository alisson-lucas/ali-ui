'use client'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
