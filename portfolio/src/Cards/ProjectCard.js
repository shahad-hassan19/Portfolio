

export default function ProjectCard(props){
    return(
        <div className="h-80 text-center rounded-lg  shadow-lg shadow-black relative overflow-hidden">
            <img src={props.src} alt="Project-img" className='w-full h-full block'/>
            <div className="group flex justify-center align-items-center bg-transparent h-full w-full absolute top-0 left-0 hover:bg-yellow-400 hover:bg-opacity-80  transition-opacity duration-300 ease-in-out">
                <a href={props.href} target="_blank" rel="noreferrer" className="absolute px-2 text-black font-semibold shadow-md shadow-white text-3xl bottom-1/2 transition transform translate-y-52 group-hover:translate-y-10 duration-500">{props.name}</a>
            </div>
        </div>
    )
}