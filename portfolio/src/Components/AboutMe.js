import LaptopPic from './Assets/LaptopPic.jpg'
export default function AboutMe(){
    return(
        <div id='about-me' className="bg-white w-full py-14 md:py-24">
            <div className="flex flex-col text-black sm:mx-12 md:mx-6 lg:mx-8 xl:mx-24 px-3">
                <div>
                    <h2 className="text-center text-black mb-2"><span className="bg-yellow-300 px-2 ">About Me</span></h2>
                    <h2 className="text-center font-semibold text-3.5xl mb-12 ">Know Me More</h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-between align-items-center ">
                    <div className="px-3 flex-2">
                        <h2 className="mb-4 text-2.6xl text-center lg:text-left">
                            Hi, I'm <span className="font-bold border-b-2 border-yellow-300">Shahad Hassan</span>
                        </h2>
                        <p className="mb-4 text-xl text-justify font-normal">
                        I'm a frontend developer passionate about React. I love building websites that captivate users. I'm always exploring new ways to bring ideas to life through code. Being a firm believer in the power of teamwork, I cherish the opportunity to collaborate and contribute as a team player, where our collective creativity sparks exceptional results. I embrace challenges as opportunities for growth, dedicating myself to hard work and continuous learning in this ever-evolving tech landscape.
                        </p>
                    </div>
                    <img src={LaptopPic} alt="Laptop" className="w-80 rounded-md self-center lg:ml-6 mt-6 lg:mt-0 lg:px-0" />
                </div>
                <div className="mt-6 grid sm:grid-cols-1 sm:justify-items-center md md:grid-cols-2 lg:flex lg:justify-between align-items-center ">
                    <div className="mt-4 px-3">
                        <p className="font-medium">Name:</p>
                        <p className="font-semibold text-lg">Shahad Hassan</p>
                    </div>
                    <div className="mt-4 px-3">
                        <p className="font-medium">Email:</p>
                        <p className="font-semibold underline text-lg">shahadg1983@gmail.com</p>
                    </div>
                    <div className="mt-4 px-3">
                        <p className="font-medium">Date of Birth:</p>
                        <p className="font-semibold text-lg">05 June, 2003</p>
                    </div>
                    <div className="mt-4 px-3">
                        <p className="font-medium">From:</p>
                        <p className="font-semibold text-lg">Uttar Pradesh, India</p>
                    </div>

                </div>
            </div>
        </div>
    )
}