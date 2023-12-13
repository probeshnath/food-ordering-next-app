import Link from 'next/link'


const Header = () => {
  return (
    <header className="flex items-center justify-between ">
    <Link className="text-primary font-semibold text-2xl" href="">PIZZA GHOR</Link>

    <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/#about'}>About</Link>
        <Link href={'/#contact'}>Contact</Link>
    </nav>

    <nav>
      <Link className="bg-primary rounded-full text-white px-6 mr-2 py-2" href={'/login'}>Login</Link>
      <Link className="bg-primary rounded-full text-white px-6 py-2" href={'/register'}>Register</Link>
    </nav>

  </header>
  )
}

export default Header