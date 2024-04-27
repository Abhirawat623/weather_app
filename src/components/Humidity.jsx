export const Humidity =(wind)=>{
    //humidity
 const humid=wind.wind[1].main.humidity
 //pressure
 const pressureHpa=wind.wind[1].main.pressure
//wind
 const windSpeed=wind.wind[1].wind.speed
console.log(wind);
//hpa to hg
    const conversionFactor = 0.02952998751;
    const pressureMg = pressureHpa * conversionFactor;
   

    return(
    <section className="bg-gradient-to-r from-cyan-800 to-red-800 flex flex-row justify-evenly p-4 items-center
               rounded-md w-4/5 absolute translate top-2/4 left-2/4">
        <div className="flex flex-col justify-center items-center">
            <img src="../wind.svg" className="w-12 "/>
            <span className="text-white">{windSpeed} m/s</span>
            <span className="text-gray-300 font-serif text-sm">Wind</span>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src="../humidity.svg" className="w-12 "/>
            <span className="text-white">{humid} %</span>
            <span className="text-gray-300 font-serif text-sm">Humidity</span>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src="../pressure.svg" className="w-12 "/>
            <span className="text-white">{Math.round(pressureMg)} Hg</span>
            <span className="text-gray-300 font-serif text-sm">Pressure</span>
        </div>
    </section>)
}