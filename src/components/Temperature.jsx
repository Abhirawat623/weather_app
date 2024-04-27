export const Temperature =()=>{

    return(
    <div className="flex flex-row justify-around w-screen ">
        <div className="flex flex-col justify-center items-center">
        <span className="text-6xl font-black py-1">44</span>
        <span className="text-gray-500 font-serif">Clear Sky</span></div>
        <img src="./sun.svg" className="w-80  object-cover"/>
    </div>
    )
}