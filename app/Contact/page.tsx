import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
  
const ContactUs = () => {
    return(
        <> <div>
            <Header/>
        
            <Hero/>
            <section id="Contact" className="py-20 container mx-auto">
             <h2 className="text-3xl font-bold mb-4">Our Contact</h2>
             <p className="text-lg">If you have any problem feel free to Contact.</p>
             <p className="text-lg">Email: Hellodeveloper@gmail.com</p>
            </section>
        
          </div>
           <Footer/>
        </>
    )
}

export default ContactUs;