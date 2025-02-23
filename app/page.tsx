import bg from '@/assets/bg.png'
import Hero from '@/components/Hero'

export default function Index(){
  return (
    <main className="h-dvh bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg.src})` }}>
      <Hero title='Lazuli' subtitle='Artefatos' />
    </main>
  )
}
