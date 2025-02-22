import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import './tailwind.css'

export const metadata: Metadata = {
  title: 'Lazuli Artefatos',
  description: 'Lojinha de arte.fatos - ecobags feitas à mão sob encomenda e LP\'s dos clássicos aos mais raros. desvenda...',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>){
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
