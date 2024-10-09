import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import HireMe from './components/HireMe';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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
