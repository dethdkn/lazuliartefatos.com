'use client'
import { suezOne } from '@/utils/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function NavLink({ href, text, title, first, last }: Readonly<{ href: string, text: string, title?: boolean, first?: boolean, last?: boolean }>){
  const pathName = usePathname()
  const active = pathName === href

  return (
    <Link href={href} className={`group flex items-center justify-center space-x-2 p-3 text-sm transition-all duration-300 hover:bg-blue-700 hover:text-white sm:p-4 sm:text-base ${title ? 'hidden rounded-b-lg bg-blue-700 text-white sm:block' : 'bg-white text-black'} ${first ? 'rounded-bl-lg' : ''} ${last ? 'rounded-br-lg' : ''} ${active ? '!bg-blue-700 !text-white' : ''}`} >
      <span className={title ? suezOne.className : ''}>{text}</span>
    </Link>
  )
}

const routes = [
  { text: 'Início', href: '/', first: true },
  { text: 'Ecobags', href: '/ecobags' },
  { text: 'Cerâmicas', href: '/ceramicas' },
  { text: 'Quadros', href: '/quadros', last: true },
]

export default function Nav(){
  const [scrollY, setScrollY] = useState(1)

  useEffect(() => {
    function handleScroll(){
      // eslint-disable-next-line react/hooks-extra/no-direct-set-state-in-use-effect
      setScrollY(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed left-1/2 top-0 w-full -translate-x-1/2 transition-all duration-500 ${scrollY > 0 ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
      <div className="flex items-center justify-center px-2 sm:justify-between md:px-4 lg:px-10 xl:px-20">
        <NavLink text="Lazuli Artefatos" href="/" title />
        <div className="flex items-center justify-center">
          {routes.map(({ href, text, first, last }) => <NavLink key={href} text={text} href={href} first={first} last={last} />)}
        </div>
      </div>
    </nav>
  )
}
