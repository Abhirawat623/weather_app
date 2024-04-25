import { createContext, useReducer,useContext } from "react";
import {locationReducer} from "../reducer/location-reducer";

const initialValue={
location:"",
data:""

};

const LocationContext= createContext(initialValue);

const LocationProvider=({children})=>{

    const [{location,data},locationDispatch] = useReducer(locationReducer,initialValue)

    return(
<LocationContext.Provider value={{location,data,locationDispatch}}>
    {children}
</LocationContext.Provider>
    )
}

const useLocation =()=> useContext(LocationContext);

export {useLocation,LocationProvider}