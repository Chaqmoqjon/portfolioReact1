import React,  {useState, useEffect} from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Img from "./assets/3.jpg";
import Language from "./language/Language";
import Loading from "./components/loading/Loading";




function App() {
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    
    
      <>

{
      loading ? <Loading loading={loading}/> : <div className="asosiy">
      <Language/>
      <img className="fixed__img" src={Img} alt="" />

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      </div>
      }
      
    </>
   
  );
}

export default App;
