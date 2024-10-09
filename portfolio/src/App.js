import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero.js';
import AboutMe from './components/AboutMe.js';
import MySkills from './components/MySkills.js';
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';
import HireMe from './components/HireMe.js';
import Testimonials from './components/Testimonials.js';
import ContactSection from './components/ContactSection.js';
import Footer from './components/Footer.js';

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
