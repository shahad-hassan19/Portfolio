export default function SkillCard(props){
    return(
        <div className=" mt-12 px-3 lg:p-6 text-center">
            <div className="flex justify-center align-items-center text-4xl text-yellow-300 font-medium">{props.icon}</div>
            <h3 className=" my-3 text-1.25xl font-semibold opacity-70">{props.skill}</h3>
        </div>
    )
}