import { useLocation } from "../context/location-context";
import { useEffect } from "react";
const useCities = () => {
  const {locationDispatch,location}=useLocation();

	useEffect(() => {

		const getCities = async () => {
			console.log(location)
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=6557810176c36fac5f0db536711a6c52`
        );
        const apiData = await response.json();
      
        if (apiData.cod === "200") {
        locationDispatch({
            type:"DATA",
            payload:apiData
        })
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return false;
      }
    
		};

    getCities()
	}, [location]);

  return { location};

};

export default useCities;


















