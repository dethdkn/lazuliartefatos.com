import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Nav from '@/components/navbar/Nav'
import { roboto } from '@/utils/fonts'
import { Analytics } from '@vercel/analytics/next'
import './tailwind.css'

export const metadata: Metadata = {
  title: 'Lazuli Artefatos',
  description: 'Lojinha de arte.fatos - ecobags feitas à mão sob encomenda e LP\'s dos clássicos aos mais raros. desvenda...',
}

export default function IndexLayout({ children }: Readonly<{ children: ReactNode }>){
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
