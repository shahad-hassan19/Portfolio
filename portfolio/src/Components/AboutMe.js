import LaptopPic from './Assets/LaptopPic.jpg'
export default function AboutMe(){
    return(
        <div id='about-me' className="bg-white w-full py-14 md:py-24">
            <div className="flex flex-col text-black mx-12 md:mx-6 lg:mx-8 xl:mx-24 px-3">
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
                        I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.
                        </p>
                    </div>
                    <img src={LaptopPic} alt="Laptop" className="w-80 rounded-md self-center px-3 mt-6 lg:mt-0 lg:px-0" />
                </div>
                <div className="mt-6 grid grid-cols-2 lg:flex justify-between align-items-center ">
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