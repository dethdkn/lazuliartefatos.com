import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

export default function CardLink({ text, href, image, color }: Readonly<{ text: string, href: string, image: StaticImageData, color: 'blue' | 'cyan' | 'green' | 'red' }>){
  return (
    <Link href={href} className="group relative items-center justify-center overflow-hidden rounded-md">
      <div className="h-[30rem] w-96">
        <Image src={image} alt={text} className="size-full object-cover transition-transform duration-500 group-hover:scale-125" />
      </div>
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${color === 'blue' ? 'to-blue-500' : color === 'cyan' ? 'to-cyan-500' : color === 'green' ? 'to-green-500' : color === 'red' ? 'to-red-500' : ''}`} />
      <div className="absolute inset-0 flex translate-y-[42%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <span className="text-3xl font-bold text-white">
          {text}
        </span>
      </div>
    </Link>
  )
}
