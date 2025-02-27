import bg from '@/assets/bg.png'
import ceramica from '@/assets/ceramica.png'
import ecobag from '@/assets/ecobag.png'
import quadro from '@/assets/quadro.png'
import style from '@/assets/style.module.css'
import CardLink from '@/components/CardLink'
import Hero from '@/components/Hero'
import { roboto } from '@/utils/fonts'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Index(){
  return (
    <main className="h-dvh bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg.src})` }}>
      <Hero title='Lazuli' subtitle='Artefatos' >
        <div className={`mt-3 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 ${roboto.className}`}>
          <Link href='#conheca' className='flex w-40 items-center justify-center space-x-1 rounded-full bg-blue-500 px-6 py-2 text-xl transition-all duration-300 hover:bg-blue-600'>
            <Icon icon="lsicon:double-arrow-down-filled" />
            <span>Conheça</span>
          </Link>
          <a href='https://api.whatsapp.com/send?phone=5521966215261' target='_blank' rel="noreferrer noopener" className='flex w-40 items-center justify-center space-x-1 rounded-full bg-green-500 px-6 py-2 text-xl transition-all duration-300 hover:bg-green-600'>
            <Icon icon="mage:whatsapp" />
            <span>Whatsapp</span>
          </a>
          <a href='https://www.instagram.com/lazuliecobags' target='_blank' rel="noreferrer noopener" className={`flex w-40 items-center justify-center space-x-1 rounded-full px-6 py-2 text-xl transition-all duration-300 ${style.instagram}`}>
            <Icon icon="mdi:instagram" />
            <span>Instagram</span>
          </a>
        </div>
      </Hero>
      <section id='conheca' className='mx-auto max-w-7xl px-4 py-8'>
        <div className='grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:place-items-stretch'>
          <CardLink text='Ecobags' href='/ecobags' image={ecobag} color='blue' />
          <CardLink text='Cerâmicas' href='/ceramicas' image={ceramica} color='green' />
          <CardLink text='Quadros' href='/quadros' image={quadro} color='cyan' />
        </div>
      </section>
    </main>
  )
}
