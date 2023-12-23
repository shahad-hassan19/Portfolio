/* eslint-disable eqeqeq */
import ProjectCard from '../Cards/ProjectCard'
import PortfolioImg from './Assets/Portfolio-img.png'
import MG from './Assets/M&G.png'
import Scoiateal from './Assets/Scoiateal.png'
import Redfly from './Assets/Redfly.png'
import Amazon from './Assets/Amazon.png'

import { useState, React } from 'react';
export default function Projects(){
    let [proj, setProj] = useState("All");
    let [activeButton, setActiveButton] = useState("All");
    return(
        <div id='projects' className=" bg-white w-full py-14 md:py-24">
            <div className=" text-black mx-12 md:mx-6 lg:mx-8 xl:mx-24 px-3">
                <div>
                    <h2 className="text-center text-black mb-2"><span className="bg-yellow-300 px-2 ">My Projects</span></h2>
                    <h2 className="text-center font-semibold text-3.5xl mb-12 ">Some of my recent projects</h2>
                    <div>
                        <div className="flex justify-center align-items-center mb-12" >
                            <button  className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'All' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("All");
                                setActiveButton("All")}} >All</button>
                            <button className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'ReactJS' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("ReactJS");
                                setActiveButton("ReactJS")}} >React JS</button>
                            <button className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'HTML' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("HTML")
                                setActiveButton("HTML")}} >HTML & CSS</button>
                            <button className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'Frontend' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("Frontend")
                                setActiveButton("Frontend")}} >Responsive Frontend</button>
                        </div>
                        <div>
                            {
                                proj == "All" && <div className='flex flex-wrap justify-center align-items-center ' >
                                    <ProjectCard src={PortfolioImg} href="/home" name="Portfolio" />
                                    <ProjectCard src={MG} href="https://shahad-hassan19.github.io/Mangata-Gallo/" name="Mangata & Gallo" />
                                    <ProjectCard src={Scoiateal} href="https://shahad-hassan19.github.io/TheScoia-tael/" name="Scoiateal" />
                                    <ProjectCard src={Redfly} href="https://shahad-hassan19.github.io/REDFLY-Designs/" name="Redfly Designs" />
                                    <ProjectCard src={Amazon} href="https://shahad-hassan19.github.io/Amazon-Clone/" name="Amazon Clone" />
                                </div>
                            }
                            {
                                proj == "ReactJS" && <div className='flex flex-wrap justify-center align-items-center' >
                                    <ProjectCard src={PortfolioImg} href="/home" name="Portfolio" />
                                </div>
                            }
                            {
                                proj == "HTML" && <div className='flex flex-wrap justify-center align-items-center' >
                                <ProjectCard src={MG} href="https://shahad-hassan19.github.io/Mangata-Gallo/" name="Mangata & Gallo" />
                                <ProjectCard src={Scoiateal} href="https://shahad-hassan19.github.io/TheScoia-tael/" name="Scoia'teal" />
                                <ProjectCard src={Amazon} href="https://shahad-hassan19.github.io/Amazon-Clone/" name="Amazon Clone" />
                                </div>
                            }
                            {
                                proj == "Frontend" && <div className='flex flex-wrap justify-center align-items-center' >
                                <ProjectCard src={Redfly} href="https://shahad-hassan19.github.io/REDFLY-Designs/" name="Redfly Designs" />
                                </div>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

