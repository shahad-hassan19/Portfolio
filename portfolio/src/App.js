import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import MySkills from './Components/MySkills';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import HireMe from './Components/HireMe';
import Testimonials from './Components/Testimonials';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App font-poppins">
      <Navbar />
      <Hero />
      <AboutMe />
      <MySkills />
      <Resume />
      <Projects />
      <HireMe />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
