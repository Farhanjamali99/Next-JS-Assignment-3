import Link from "next/link";
const Header = () => {
    return(
        <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <Link href="/"><h1 className="hover:text:gray-300 text-xl font-bold ">Web-Developer</h1></Link>
      <ul className="flex space-x-4">
      <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
        <li><Link href="/About" className="hover:text-blue-300">About</Link></li>
        <li><Link href="/Contact" className="hover:text-blue-300">Contact</Link></li>
      </ul>
    </nav>
  </header>
    )
}

export default Header;