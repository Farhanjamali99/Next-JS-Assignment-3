import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const AboutUs = () => {
    return(
       <> <div>
            <Header/>
            
            <Hero/>
            <section id="About" className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg">We are the leading Web-Developer service provider in the world.</p>
        <p className="text-lg">We are serving 100 of clients per Mounth</p>
      </section>
            
        </div>
        <Footer/>
        </>
    )
}

export default AboutUs;