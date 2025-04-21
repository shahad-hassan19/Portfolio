import SkillCard from "../Cards/SkillCard"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode ,FaFigma, FaBootstrap, FaSass } from "react-icons/fa";
import { SiExpress, SiTypescript, SiMongoose, SiTailwindcss, SiFirebase, SiPostman,  SiMongodb, SiShopify } from "react-icons/si";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";

export default function MySkills(){
    return(
        <div id="skills" className=" bg-gray-100 w-full py-14 md:py-24">
            <div className=" text-black sm:mx-12 md:mx-6 lg:mx-24 px-3">
                <div>
                    <h2 className="text-center text-black mb-2"><span className="bg-yellow-300 px-2 ">My Skills</span></h2>
                    <h2 className="text-center font-semibold text-3.5xl mb-12 ">How can I help your project!</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    <SkillCard icon={<FaReact/>} skill="ReactJS" />
                    <SkillCard icon={<FaNode/>} skill="NodeJS" />
                    <SkillCard icon={<SiExpress/>} skill="ExpressJS" />
                    <SkillCard icon={<SiMongodb/>} skill="MongoDB" />
                    <SkillCard icon={<SiFirebase/>} skill="Firebase" />
                    <SkillCard icon={<SiTypescript/>} skill="TypeScript" />
                    <SkillCard icon={<TbBrandNextjs/>} skill="NextJS" />
                    <SkillCard icon={<TbBrandPrisma/>} skill="Prisma"/>
                    <SkillCard icon={<SiPostman/>} skill="Postman" />
                    <SkillCard icon={<FaFigma/>} skill="Figma" />
                    <SkillCard icon={<FaHtml5/>} skill="HTML" />
                    <SkillCard icon={<FaCss3/>} skill="CSS" />
                    <SkillCard icon={<FaJs/>} skill="JavaScript" />
                    <SkillCard icon={<SiMongoose/>} skill="Mongoose" />
                    <SkillCard icon={<SiTailwindcss/>} skill="Tailwind CSS" />
                    <SkillCard icon={<FaBootstrap/>} skill="Bootstrap" />
                    <SkillCard icon={<FaSass/>} skill="Sass" />
                    <SkillCard icon={<SiShopify/>} skill="Shopify Liquid" />
                </div>
            </div>
        </div>
    )
}