import SkillCard from "../Cards/SkillCard"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function MySkills(){
    return(
        <div id="skills" className=" bg-gray-100 w-full py-14 md:py-24">
            <div className=" text-black sm:mx-12 md:mx-6 lg:mx-24 px-3">
                <div>
                    <h2 className="text-center text-black mb-2"><span className="bg-yellow-300 px-2 ">My Skills</span></h2>
                    <h2 className="text-center font-semibold text-3.5xl mb-12 ">How can I help your project!</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    <SkillCard icon={<FaReact/>} skill="React JS" />
                    <SkillCard icon={<FaNode/>} skill="Node JS" />
                    <SkillCard icon={<SiExpress/>} skill="Express JS" />
                    <SkillCard icon={<SiMongodb/>} skill="Mongo DB" />
                    <SkillCard icon={<TbBrandNextjs/>} skill="Next JS" />
                    <SkillCard icon={<FaFigma/>} skill="Figma" />
                    <SkillCard icon={<FaHtml5/>} skill="HTML" />
                    <SkillCard icon={<FaCss3/>} skill="CSS" />
                    <SkillCard icon={<FaJs/>} skill="JavaScript" />
                    <SkillCard icon={<SiTailwindcss/>} skill="Tailwind CSS" />
                    <SkillCard icon={<FaBootstrap/>} skill="Bootstrap" />
                    <SkillCard icon={<FaSass/>} skill="Sass" />
                </div>
            </div>
        </div>
    )
}