export const Weather =()=>{

    return(
        <div className="flex flex-col justify-center items-center mt-56">
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="text-center">
            <p className="text-xl font-semibold"></p>
            <p className="text-2xl font-bold">Chu</p>
            <p className="text-lg">Temperature: 5°C</p>
            <p className="text-sm">Light rain</p>
        </div>
        <div className="mt-4">
            <p className="text-gray-600">Four-day forecast:</p>
            <ul className="list-disc pl-6">
                
                <li>Monday: 13°C, cloudy</li>
                <li>Tuesday: 13°C, sunny</li>
                <li>Wednesday: 13°C, cloudy</li>
            </ul>
        </div>
    </div>
    </div>
    )
}