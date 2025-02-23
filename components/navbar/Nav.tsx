'use client'
import { useEffect, useState } from 'react'
import NavLink from './NavLink'

const routes = [
  { text: 'Início', href: '/', first: true },
  { text: 'Ecobags', href: '/ecobags' },
  { text: 'cerâmica', href: '/ceramica' },
  { text: 'Quadros', href: '/quadros' },
  { text: 'LPs', href: '/lps', last: true },
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
