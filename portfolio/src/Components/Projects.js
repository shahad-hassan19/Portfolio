/* eslint-disable eqeqeq */
import ProjectCard from '../Cards/ProjectCard'
import PortfolioImg from './Assets/Portfolio-img.png'
import MG from './Assets/M&G.png'
import CineQuestImg from './Assets/CineQuest.png'
import Redfly from './Assets/Redfly.png'
import MouseTracker from './Assets/MouseTracker.png'
import PassGenerator from './Assets/PassGenerator.png'
import CoinQuotient from './Assets/CoinQuotient.png'
import InsightLens from './Assets/InsightLens.png'

import { useState, React } from 'react';
export default function Projects(){
    let [proj, setProj] = useState("All");
    let [activeButton, setActiveButton] = useState("All");
    return(
        <div id='projects' className=" bg-white w-full py-14 md:py-24">
            <div className=" text-black sm:mx-12 md:mx-6 lg:mx-8 xl:mx-24 px-3">
                <div>
                    <h2 className="text-center text-black mb-2"><span className="bg-yellow-300 px-2 ">My Projects</span></h2>
                    <h2 className="text-center font-semibold text-3.5xl mb-12 ">Some of my recent projects</h2>
                    <div>
                        <div className="flex justify-center align-items-center mb-12" >
                            <button  className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'All' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("All");
                                setActiveButton("All")}} >All</button>
                            <button  className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'Full Stack' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("Full Stack");
                                setActiveButton("Full Stack")}} >Full Stack</button>
                            <button className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'Frontend' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("Frontend");
                                setActiveButton("Frontend")}} >Frontend</button>
                            <button className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'Static' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("Static")
                                setActiveButton("Static")}} >Static</button>
                        </div>
                        <div>
                            {
                                proj == "All" && <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-items-center ' >
                                    <ProjectCard src={InsightLens} href="https://insight-lens.vercel.app/" name="InsightLens" />
                                    <ProjectCard src={PortfolioImg} href="https://portfolio-shahad-hassan.vercel.app/" name="Portfolio" />
                                    <ProjectCard src={CineQuestImg} href="https://cinequest-gold.vercel.app/" name="CineQuest" />
                                    <ProjectCard src={MG} href="https://mangata-gallo-home.vercel.app/" name="Mangata & Gallo" />
                                    <ProjectCard src={Redfly} href="https://redfly-designs.vercel.app/" name="R£ƊFLƳ Designs" />
                                    <ProjectCard src={CoinQuotient} href="https://currency-converter-sable-ten.vercel.app/" name="CoinQuotient" />
                                    <ProjectCard src={MouseTracker} href="https://mouse-position-tracker.vercel.app/" name="Mouse Position Tracker" />
                                    <ProjectCard src={PassGenerator} href="https://password-generator-gilt-six.vercel.app/" name="Password Generator" />
                                </div>
                            }
                            {
                                proj == "Full Stack" && <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center' >
                                    <ProjectCard src={InsightLens} href="https://insight-lens.vercel.app/" name="InsightLens" />
                                </div>
                            }
                            {
                                proj == "Frontend" && <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-items-center' >
                                    <ProjectCard src={PortfolioImg} href="https://portfolio-shahad-hassan.vercel.app/" name="Portfolio" />
                                    <ProjectCard src={CineQuestImg} href="https://cinequest-gold.vercel.app/" name="CineQuest" />
                                    <ProjectCard src={MouseTracker} href="https://mouse-position-tracker.vercel.app/" name="Mouse Position Tracker" />
                                    <ProjectCard src={PassGenerator} href="https://password-generator-gilt-six.vercel.app/" name="Password Generator" />
                                    <ProjectCard src={CoinQuotient} href="https://currency-converter-sable-ten.vercel.app/" name="CoinQuotient" />
                                </div>
                            }
                            {
                                proj == "Static" && <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-items-center' >
                                <ProjectCard src={MG} href="https://mangata-gallo-home.vercel.app/" name="Mangata & Gallo" />
                                <ProjectCard src={Redfly} href="hhttps://redfly-designs.vercel.app/" name="R£ƊFLƳ Designs" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

