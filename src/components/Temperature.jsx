export const Temperature =(temp)=>{
console.log(temp)
const temperature=temp.temp[1].main.temp;
const icon=temp.temp[1].weather[0].icon
const clouds= temp.temp[1].weather[0].description;
    return(
        
    <div className="flex flex-row justify-around w-screen ">
        <div className="flex flex-col justify-center items-center">
        <span className="text-6xl font-black py-1">{Math.round(temperature - 273.15)}°C</span>
        <span className="text-gray-500 font-serif">{clouds}</span></div>
       
        <img src={`./images/${icon}.svg`} className="w-72  object-cover"/>
    </div>
    )
}