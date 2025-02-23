'use client'
import { suezOne } from '@/utils/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, text, title, first, last }: Readonly<{ href: string, text: string, title?: boolean, first?: boolean, last?: boolean }>){
  const pathName = usePathname()
  const active = pathName === href

  return (
    <Link href={href} className={`group flex items-center justify-center space-x-2 p-3 text-sm transition-all duration-300 hover:bg-blue-700 hover:text-white sm:p-4 sm:text-base ${title ? 'hidden rounded-b-lg bg-blue-700 text-white sm:block' : 'bg-white text-black'} ${first ? 'rounded-bl-lg' : ''} ${last ? 'rounded-br-lg' : ''} ${active ? '!bg-blue-700 !text-white' : ''}`} >
      <span className={title ? suezOne.className : ''}>{text}</span>
    </Link>
  )
}
