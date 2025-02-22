import type { Metadata } from 'next'
import type { ReactNode } from 'react'
// import Nav from '@/components/Nav'
import { Analytics } from '@vercel/analytics/next'
import { Roboto } from 'next/font/google'
import './tailwind.css'

export const metadata: Metadata = {
  title: 'Lazuli Artefatos',
  description: 'Lojinha de arte.fatos - ecobags feitas à mão sob encomenda e LP\'s dos clássicos aos mais raros. desvenda...',
}

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function IndexLayout({ children }: Readonly<{ children: ReactNode }>){
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        {/* <Nav /> */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
