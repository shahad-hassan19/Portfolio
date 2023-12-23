import SkillCard from "../Cards/SkillCard"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export default function MySkills(){
    return(
        <div id="skills" className=" bg-gray-100 w-full py-14 md:py-24">
            <div className=" text-black mx-12 md:mx-6 lg:mx-24 px-3">
                <div>
                    <h2 className="text-center text-black mb-2"><span className="bg-yellow-300 px-2 ">My Skills</span></h2>
                    <h2 className="text-center font-semibold text-3.5xl mb-12 ">How can I help your project!</h2>
                </div>
                <div className="grid grid-cols-2">
                    <SkillCard icon={<FaHtml5/>} skill="HTML" content="HTML is the foundation of the web, allowing us to create user-friendly and captivating online experiences. With its building blocks, We craft websites that are both beautiful and easy to use. HTML isn't just code; it's the tool that brings our ideas to life."/>
                    <SkillCard icon={<FaCss3/>} skill="CSS" content="CSS is like the paintbrush for websites. It lets us create beautiful designs and make web pages look amazing. With CSS, We give websites their unique style and make sure they're easy to use and look great on any device."/>
                    <SkillCard icon={<FaJs/>} skill="JavaScript" content="JavaScript brings websites to life by making them interactive and fun to use. It helps developers create all sorts of cool things on the web, from flashy designs to making buttons do clever tricks."/>
                    <SkillCard icon={<FaReact/>} skill="React JS" content="React revolutionizes user interfaces with its declarative, component-based architecture. It simplifies creating user interfaces by breaking them into reusable components. This makes websites faster, more flexible, and easier to maintain."/>
                </div>
            </div>
        </div>
    )
}