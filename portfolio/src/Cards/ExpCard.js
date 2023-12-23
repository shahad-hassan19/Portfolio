export default function ExpCard(props){
    return(
        <div>
            <div className="">
            <h3 className=" font-medium text-xl mb-2 ">{props.desgn}</h3>
            <p className=" mb-2 font-normal">
            <a href={props.href1} rel="noreferrer" target="_blank" >{props.company}</a> / {props.duration}
            </p>
            <p className=" mb-4 font-normal ">{props.mode}</p>
            </div>
        </div>
    )
}
