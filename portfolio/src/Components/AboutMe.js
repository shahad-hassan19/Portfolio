
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
                            I am a Full Stack Developer with a strong foundation in modern web technologies and a proven ability to take projects from concept to production. With experience spanning both frontend and backend systems, I have independently developed and deployed real-world applications, balancing performance, security, and usability.

                            At Softles, I transitioned from an intern to a full-time role, contributing to key product initiatives and collaborating closely with other developers to deliver scalable solutions.

                            I bring a builder’s mindset, a deep understanding of web architecture, and a commitment to continuous improvement. I'm particularly motivated by opportunities where engineering excellence meets real-world user impact.
                        </p>
                    </div>
                    <div className="w-80 rounded-md self-center lg:ml-6 mt-6 lg:mt-0 lg:px-0">
                    <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="shahad-hassan-82287a220" data-version="v1"></div>
                    </div>
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