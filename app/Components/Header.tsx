const Header = () => {
    return(
        <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <a href="/"><h1 className="hover:text:gray-300 text-xl font-bold ">Web-Developer</h1></a>
      <ul className="flex space-x-4">
      <li><a href="/" className="hover:text-blue-300">Home</a></li>
        <li><a href="/About" className="hover:text-blue-300">About</a></li>
        <li><a href="/Contact" className="hover:text-blue-300">Contact</a></li>
      </ul>
    </nav>
  </header>
    )
}

export default Header;