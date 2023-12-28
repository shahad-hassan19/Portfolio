export default function ProjectCard(props){
    return(
        <div className="h-80 text-center rounded-sm position-relative overflow-hidden">
            <img src={props.src} alt="Project-img" className='w-full h-full'/>
            <div className=" bg-transparent hover:bg-red-500 h-full w-full position-absolute top-0 left-0">
                <a href={props.href} target="_blank" rel="noreferrer" className="text-red">{props.name}</a>
            </div>
        </div>
    )
}