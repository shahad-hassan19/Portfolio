import SwiperCard from "../Cards/SwiperCard";


export default function Testimonials(){
    return(
        <div id="testimonials" className="bg-gray-500 w-full py-14 md:py-24">
            <div className="mx-12 md:mx-6 lg:mx-8 xl:mx-24 px-3 text-white">
                <div>
                    <h2 className="text-center text-black mb-2"><span className="bg-yellow-300 px-2 ">Mentor Speak</span></h2>
                    <h2 className=" text-center font-semibold text-3.5xl mb-12">What my Mentors Say</h2>
                </div>
                <SwiperCard />
                <div className='sticky z-20 text-black visible flex list-disc'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
            </div>
        </div>
    )
}