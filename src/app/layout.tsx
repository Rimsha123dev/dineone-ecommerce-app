import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/app/layout/Header"
import  Providers from "@/components/Provider"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
        {/* children is our homepage */}
        <main className='px-8'>
        {children}
        </main>
        </Providers>
        </body>
    </html>
  )
}
