export default function ProjectCard(props){
    return(
        <div className="bg-cover w-60 h-80 m-6 p-3 bg-center text-center"
        style={{ backgroundImage: `url(${props.src})`}} >
            <a href={props.href} target="_blank" rel="noreferrer" className="text-red">{props.name}</a>
        </div>
    )
}