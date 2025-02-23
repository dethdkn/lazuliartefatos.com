import bg from '@/assets/bg.png'
import Hero from '@/components/Hero'

export default function NotFound(){
  return (
    <main className="h-dvh bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg.src})` }}>
      <Hero title='404' subtitle='Página não encontrada' />
    </main>
  )
}
