export default function ExpCard(props){
    return(
        <div>
            <div className="">
            <h3 className=" font-medium text-xl mb-2 ">{props.desgn}</h3>
            <p className=" mb-2 font-normal">
            <a href={props.href} rel="noreferrer" target="_blank" className=" hover:font-bold" >{props.company}</a> / {props.duration}
            </p>
            <p className=" mb-4 font-normal " style={{color: "#6C757D"}}>{props.description}</p>
            </div>
        </div>
    )
}
