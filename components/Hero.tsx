import lazuli from '@/assets/lazuli.png'
import { suezOne } from '@/utils/fonts'
import Image from 'next/image'

export default function Hero({ title, subtitle }: Readonly<{ title: string, subtitle: string }>){
  return (
    <section className='flex h-dvh flex-col items-center justify-center'>
      <Image src={lazuli} alt='lazuli Artefatos Logo' className='size-64 sm:size-96' />
      <div className={`flex flex-col items-center justify-center text-center text-4xl text-white sm:text-6xl ${suezOne.className}`}>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    </section>
  )
}
