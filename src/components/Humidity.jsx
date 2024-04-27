export const Humidity =()=>{

    return(
    <section className="bg-gradient-to-r from-cyan-800 to-red-800 flex flex-row justify-evenly p-4 items-center
               rounded-md w-[50rem] absolute translate top-2/4 left-2/4">
        <div className="flex flex-col justify-center items-center">
            <img src="../wind.svg" className="w-12 "/>
            <span className="text-white">4.12 m/s</span>
            <span className="text-gray-300 font-serif text-sm">Wind</span>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src="../humidity.svg" className="w-12 "/>
            <span className="text-white">4.12 m/s</span>
            <span className="text-gray-300 font-serif text-sm">Wind</span>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src="../pressure.svg" className="w-12 "/>
            <span className="text-white">4.12 m/s</span>
            <span className="text-gray-300 font-serif text-sm">Wind</span>
        </div>
    </section>)
}