export default function EduCard(props){
    return(
        <div className="">
            <h3 className=" font-medium text-xl mb-2">
                {props.name}
            </h3>
            <p className=" mb-2 font-normal ">
                {props.institute} / {props.year}
            </p>
            <p className=" mb-4 font-normal">
                {props.board}
            </p>
        </div>
    )
}

