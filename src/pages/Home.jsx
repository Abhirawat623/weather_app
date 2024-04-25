import { useLocation } from "../context/location-context";
export const Home =()=>{
    //location context
    const {location,data}=useLocation()
    console.log(data)
    return(
        <div>33</div>
    )
}