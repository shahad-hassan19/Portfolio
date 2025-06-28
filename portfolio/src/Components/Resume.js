import EduCard from '../Cards/EduCard'
import ExpCard from '../Cards/ExpCard';
export default function Resume(){
    return(
        <div id='resume' className=" bg-white text-left w-full py-14 md:py-24">
            <div className=" text-black sm:mx-12 md:mx-6 lg:mx-8 xl:mx-24 px-3">
                <div>
                    <h2 className="text-center text-black mb-2"><span className="bg-yellow-300 px-2 ">Resume</span></h2>
                    <h2 className="text-center font-semibold text-3.5xl mb-12 ">A summary Of My Resume</h2>
                </div>
                <div className='lg:flex'>
                    <div className="grid grid-cols-1 lg:flex-1 mt-12 px-6">
                        <h1 className=" text-1.5xl font-semibold pb-2 mb-6">My Education</h1>
                        <div className=" border-l-2 border-yellow-300 pl-4">
                            <EduCard name="Bachelor of Technology - CSE" year="2020-2024" board="AKTU" institute="Vidya College of Engineering" />
                            <hr className="my-6" />
                            <EduCard name="Intermediate" year="2019-2020" board="CBSE Board" institute="D.S. Public School" />
                            <hr className="my-6" />
                            <EduCard name="High-School" year="2017-2018" board="CBSE Board" institute="D.S. Public School" />
                            <hr className="my-6" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:flex-1 mt-12 px-6">
                        <h1 className=" text-1.5xl font-semibold pb-2 mb-6 ">My Experience</h1>
                        <div className=" border-l-2 border-yellow-300 pl-4">
                            <ExpCard desgn="Full Stack Developer" duration="February 2025 - Present" company="SOFTLES" href="http://www.softles.com/" description="Developed and deployed front-end and full-stack platforms with secure authentication, handling role-based controls using Next.js, React.js and Node.js. Owned integration of third-party services and APIs, navigating documentation gaps and solving real-world implementation challenges." />
                            <hr className="my-6" />
                            <ExpCard desgn="Front End Developer (Intern → Full Time)" duration="August 2023 - February 2025" company="SOFTLES" href="http://www.softles.com/" description="Contributed to the development and evolution of user-facing web platforms, starting as an intern and transitioning into a full-time role based on performance and ownership." />
                            <hr className="my-6" />
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center align-items-center mt-12 mb-4">
                    <button className="bg-white text-black cursor-pointer py-3 px-10 font-medium border-2 border-black hover:bg-black transition ease-in-out delay-150 duration-300 hover:text-white">
                        <a href="https://drive.google.com/file/d/1dzCH2b1mQIyndmqdNlR7tr7cXOu3S_AW/view?usp=sharing" rel='noreferrer' target='_blank'>Download CV</a>
                    </button>
                </div>
            </div>
        </div>
    )
}