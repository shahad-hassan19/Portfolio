import { Link } from "react-scroll";

export default function Footer(){
    return(
        <div className="bg-black w-full py-16">
            <div className="sm:mx-12 md:mx-6 lg:mx-8 xl:mx-24 text-white text-center font-normal grid grid-cols-1 lg:grid-cols-2 align-items-center ">
                <div className="px-3 mb-2 lg:mb-0">
                    <p className=" text-center ">Copyright &copy; 2023 <span className=" text-yellow-300 underline"><Link className="cursor-pointer" to="home" spy={true} smooth={true} offset={-100} duration={500} >Shahad</Link></span>. All Rights Reserved.</p>
                </div>
                <div className="px-3">
                    <p>Designed by <span className=" text-yellow-300 underline"><Link className="cursor-pointer" to="home" spy={true} smooth={true} offset={-100} duration={500} >Shahad Hassan</Link></span></p>
                </div>
            </div>
        </div>
    )
}