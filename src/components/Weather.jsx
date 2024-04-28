export const Weather=(wind)=>{
    //humidity
 const visibility=wind.wind[1].visibility
 //pressure
 const maxTemp=wind.wind[1].main.temp_max
//wind
 const minTemp=wind.wind[1].main.temp_min
console.log(wind);


    return(
    <section className="bg-gradient-to-r from-cyan-800 to-red-800 flex flex-row justify-evenly p-4 items-center
               rounded-md w-4/5 absolute translate top-3/4 left-2/4 ">
        <div className="flex flex-col justify-center items-center">
            <img src="../visibility.png" className="w-12  " alt="visibility"/>
            <span className="text-white">{visibility}</span>
            <span className="text-gray-300 font-serif text-sm">Visibility</span>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src="../min.png" className="w-12 " alt="max_temp"/>
            <span className="text-white">{Math.round(minTemp - 273.15)}°C</span>
            <span className="text-gray-300 font-serif text-sm">Min Temp</span>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src="../max.png" className="w-12 " alt="min_temp"/>
            <span className="text-white">{Math.round(maxTemp - 273.15)}°C</span>
            <span className="text-gray-300 font-serif text-sm">Max Temp</span>
        </div>
    </section>)
}