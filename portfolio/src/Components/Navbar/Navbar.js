import { Link } from "react-scroll";
import logo from '../Assets/S..png'
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import './Navbar.css';

export default function Navbar(){
    const [toggleIcon, setToggleIcon] = useState(false);
    // const [showBackToTop, setShowBackToTop] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     checkIfHomePage();
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // },);

    // const checkIfHomePage = () => {
    //     const isTopOfPage = window.scrollY === 0;
    //     setIsHomePage(isTopOfPage);

    // }

    // const handleScroll = () => {
    //     const currentScrollY = window.scrollY;
    //     setShowBackToTop(currentScrollY > -100);

    // }

    const handleClickIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return(
        <div className={`bg-yellow-300 w-full z-10 top-0 fixed`}>
            <div className=" px-6 md:mx-24 md:px-3 py-6 flex align-items-center justify-between text-black ">
                <Link activeClass="!active" className="cursor-pointer" to="home" spy={true} smooth={true} offset={-100} duration={500} ><img src={logo} className=" h-10 w-10" alt="logo"/></Link>
                <div className="lg:hidden" onClick={handleClickIcon}>
                    {
                        toggleIcon ? ' ' : <FaBars className="lg:hidden text-3xl" />
                    }
                </div>
                <div className="hidden lg:block font-semibold pt-3 align-items-center">
                    <ul className=" text-center font-semibold text-md ">
                        <Link activeClass='active' to="about-me" spy={true} smooth={true} offset={-20} duration={500} className="px-3 cursor-pointer">About</Link>
                        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-20} duration={500} className="px-3 cursor-pointer">Skills</Link>
                        <Link activeClass='active' to="resume" spy={true} smooth={true} offset={-20} duration={500} className="px-3 cursor-pointer">Resume</Link>
                        <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-20} duration={500} className="px-3 cursor-pointer">Projects</Link>
                        <Link activeClass='active' to="testimonials" spy={true} smooth={true} offset={-20} duration={500} className="px-3 cursor-pointer">Testimonials</Link>
                        <Link activeClass='active' to="contact-me" spy={true} smooth={true} offset={-20} duration={500} className="px-3 cursor-pointer">Contact</Link>
                    </ul>
                </div>
            </div>
            <div className={`bg-gradient lg:hidden bg-opacity-90 z-50 top-0 left-0 fixed p-4 h-screen w-full bg-black text-white position-absolute grid justify-center align-items-center ${toggleIcon ? ' block ' : ' hidden' }`} >
                        <div className="flex justify-end" onClick={handleClickIcon}>
                            <HiX className=" text-white text-3xl fixed right-6 md:right-28 top-6 " />
                        </div>
                        <div >
                            <ul className=" ham m-3 grid  align-content-around justify-center font-medium text-2xl ">
                                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className="py-2 hover:text-yellow-300 cursor-pointer" onClick={handleClickIcon}s>Home</Link>
                                <Link activeClass='active' to="about-me" spy={true} smooth={true} offset={-20} duration={500} className="py-2 hover:text-yellow-300 cursor-pointer" onClick={handleClickIcon}>About Me</Link>
                                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-20} duration={500} className="py-2 hover:text-yellow-300 cursor-pointer" onClick={handleClickIcon}>Skills</Link>
                                <Link activeClass='active' to="resume" spy={true} smooth={true} offset={-20} duration={500} className="py-2 hover:text-yellow-300 cursor-pointer" onClick={handleClickIcon}>Resume</Link>
                                <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-20} duration={500} className="py-2 hover:text-yellow-300 cursor-pointer" onClick={handleClickIcon}>Projects</Link>
                                <Link active Class='active' to="testimonials" spy={true} smooth={true} offset={-20} duration={500} className="py-2 hover:text-yellow-300 cursor-pointer" onClick={handleClickIcon}>Testimonials</Link>
                                <Link activeClass='active' to="contact-me" spy={true} smooth={true} offset={-20} duration={500} className="py-2 hover:text-yellow-300 cursor-pointer" onClick={handleClickIcon}>Contact Me</Link>
                            </ul>
                        </div>
                        <div className="flex justify-center self-center align-items-center font-bold">
                            <a href="https://www.facebook.com/shahad.chauhangurjar.9" rel='noreferrer' target='_blank' ><FaFacebook className='text-2xl mx-4 text-white hover:text-blue-900' onClick={handleClickIcon}/></a>
                            <a href="https://www.Linkedin.com/in/shahad-hassan-82287a220" rel='noreferrer' target='_blank'><FaLinkedin className='text-2xl mx-4 text-white hover:text-blue-500' onClick={handleClickIcon}/></a>
                            <a href="https://twitter.com/ChauhanShahad03" rel='noreferrer' target='_blank'><FaXTwitter className='text-2xl mx-4 text-white hover:text-black' onClick={handleClickIcon}/></a>
                            <a href="https://github.com/shahad-hassan19" rel='noreferrer' target='_blank'><FaGithub className='text-2xl mx-4 text-white hover:text-black' onClick={handleClickIcon}/></a>
                            <a href="https://www.instagram.com/shahad_chauhan019/" rel='noreferrer' target='_blank'><FaInstagram className='text-2xl mx-4 text-white hover:text-pink-600' onClick={handleClickIcon}/></a>
                        </div>
                    </div>
                    <div>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="fixed z-50 bottom-3 right-3 p-3 bg-black opacity-30 text-white font-normal rounded-full w-max cursor-pointer" > <FaArrowUp /></Link>
                    </div>
        </div>
    )
}