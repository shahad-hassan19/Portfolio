import MyPC from './Assets/MyPC.jpg'
export default function HireMe(){
    return(
        <div className=" bg-cover w-full bg-center overflow-hidden"
        style={{ backgroundImage: `url(${MyPC})` }} >
            <div className='bg-gradient bg-opacity-50 bg-slate-900 bg-scroll h-full w-full py-14 md:py-24'>
                <div className="mx-12 md:mx-6 lg:mx-8 xl:mx-24 px-3 py-12 text-center ">
                    <h2 className="text-white font-semibold text-3.5xl xl:mt-16 mb-12 ">Interested in Working with Me?</h2>
                    <button onClick={() => document.getElementById('contact-me').scrollIntoView({behavior: 'smooth'})} className="bg-yellow-300 border-yellow-300 text-black cursor-pointer py-3 px-10 font-medium border-2">
                        Hire Me!
                    </button>
                </div>
            </div>
        </div>
    )
}