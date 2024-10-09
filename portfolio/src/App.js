import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Hero from './Components/Hero.js';
import AboutMe from './Components/AboutMe.js';
import MySkills from './Components/MySkills.js';
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';
import HireMe from './Components/HireMe.js';
import Testimonials from './Components/Testimonials.js';
import ContactSection from './Components/ContactSection.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App font-poppins">
    <Navbar />
    <Hero/>
    <AboutMe/>
    <MySkills/>
    <Resume/>
    <Projects/>
    <HireMe/>
    <Testimonials/>
    <ContactSection/>
    <Footer />
    </div>
  );
}

export default App;
