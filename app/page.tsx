import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {LogoAnimation} from "./components/LogoAnimation";
import {Portfolio} from "./components/Portfolio";
import {KeyMetrics} from "./components/KeyMetrics";
import {Stack} from "./components/Stack";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";



export default function Home() {
  return (
    <>
   <Navbar />  
    <Hero /> 
    <LogoAnimation />
    <About />
    <Portfolio />
    <KeyMetrics />
    <Stack />
    <Contact />
    <Footer />
    
    </>
    
  
  );
}
