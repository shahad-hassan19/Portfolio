import Pic from './Assets/Ellipse 1.png';
import { Link } from 'react-scroll';
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
export default function Hero(){

    return(
        <div id='home' className="bg-yellow-300 w-full text-black lg:mt-16 ">
            <div className=" flex flex-col-reverse text-center lg:text-left lg:flex-row justify-between align-items-center sm:mx-12 md:mx-6 lg:mx-8 xl:mx-24 pt-16">
                <div className="flex flex-col px-3 lg:mt-8">
                    <h1 className=" text-2.6xl sm:text-3xl md:text-3.25xl lg:text-4xl xl:text-4.5xl font-light">HI, I'M SHAHAD HASSAN</h1>
                    <h1 className=" text-4.5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold opacity-80">DEVELOPER</h1>
                    <h4 className=" text-xl font-normal mb-4">Based in Shamli, India.</h4>
                    <div>
                        <button onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})} className=" bg-black text-white mt-4 py-3 px-10 font-medium">View My Works</button>
                        <button onClick={() => document.getElementById('contact-me').scrollIntoView({behavior: 'smooth'})} className=" font-medium mt-4 py-3 px-10 bg-transparent inline-flex underline"><span>Contact Me</span><FaRegArrowAltCircleDown className='mx-2 text-lg'/></button>

                    </div>
                </div>
                <div className="lg:float-left self-center mt-20 lg:mt-7 rounded-full overflow-hidden mb-6 px-3 lg:m-8 border-black">
                    <img src = {Pic} alt='My-Pic' className=" w-80 flex-shrink-1" />
                </div>
            </div>
            <div className='flex justify-center align-items-center mt-20 pb-10'>
                <Link activeClass='active' to="about-me" spy={true} smooth={true} offset={-20} duration={500} className=" animate-bounce px-3 cursor-pointer"><FaArrowDown className='text-xl font-bold self-center'/></Link>
            </div>
        </div>
    )
}