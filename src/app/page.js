import Link from "next/link"


const Home = () => {
  return (
    <>
    <header className="flex items-center justify-between ">
      <Link className="text-primary font-semibold text-2xl" href="">PIZZA GHOR</Link>
      <nav className="flex gap-4">
      <Link href={'/'}>Home</Link>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/#about'}>About</Link>
          <Link href={'/#contact'}>Contact</Link>
          <Link href={'/#login'}>Login</Link>
      </nav>
    </header>
    </>
  )
}

export default Home