import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"

const Home = () => {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <section id="About" className="bg-yellow-200 py-20 container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-lg text-center">We are the leading Web-Developer service provider in the world.</p>
        <p className="text-lg text-center">We are serving 100 of clients per Mounth</p>
      </section>
      <section id="Contact" className="bg-gray-300 py-20 container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Contact</h2>
            <p className="text-lg text-center">If you have any problem feel free to Contact.</p>
            <p className="text-lg text-center">Email: Hellodeveloper@gmail.com</p>
      </section>
    </main>
    <Footer />
  </>
  )
}

export default Home;
