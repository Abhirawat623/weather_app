import { useLocation } from "../context/location-context";
import axios from "axios"

const getLocation=()=>{
    const {locationDispatch,}=useLocation();
    
const inputLocation = async (location)=>{
    
try{
    axios.defaults.headers.common["X-Api-Key"] = "lNhOELJHDMrwCwm40hFvwA==teZv2EboEGJfonOC";
    const { data } = await axios.get(
      "https://api.api-ninjas.com/v1/city?name=delhi&limit=4"
    );
locationDispatch({
    type:"DATA",
    payload:data
})
}
catch(error){
    console.log(error)
}

}

return {inputLocation}

}

export default getLocation;