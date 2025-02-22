import bg from '@/assets/bg.jpeg'

export default function Index(){
  return (
    <main className="h-dvh bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg.src})` }} />
  )
}
