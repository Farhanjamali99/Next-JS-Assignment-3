import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
  
const ContactUs = () => {
    return(
        <> <div>
            <Header/>
        
            <Hero/>
            <section id="Contact" className="bg-gray-100 py-20 container mx-auto">
             <h2 className="text-3xl font-bold mb-4 text-center">Our Contact</h2>
             <p className="text-lg text-center">If you have any problem feel free to Contact.</p>
             <p className="text-lg text-center">Email: Hellodeveloper@gmail.com</p>
            </section>
        
          </div>
           <Footer/>
        </>
    )
}

export default ContactUs;