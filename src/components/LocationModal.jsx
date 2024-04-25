import {useNavigate} from "react-router-dom"
import {useLocation} from "../context/location-context"
import { useModal } from "../context/modal-context"
import getLocation from "../customHooks/getLocation";
import {toast} from "alert"
export const LocationModal = () => {
  //get location
const {inputLocation} =getLocation();
  const { setIsLocationModalOpen } = useModal();
  //modal close
  const handleLocationModalClose = () => {
    setIsLocationModalOpen(false);
  };
  //location context
  const {locationDispatch,location}= useLocation()
 //input location
 const handleLocationInput=(event)=>{
    locationDispatch({
      type:"LOCATION",
      payload:event.target.value
    })
 }
 //navigate
 const navigate= useNavigate();
//submitting location
const handleSubmitBtn= async (event)=>{
  event.preventDefault();
  if(location.length>0){
    await inputLocation(location);
    navigate("/home")
  }
  else{
    toast("Please type your location")
  }
}




 console.log(location)
  return (
    <>
      <div
        className="bg-red h-6 w-6 translate top-2/4 left-2/4 
        flex flex-col  items-center h-64 w-96 xl:w-[35rem]
        absolute border-solid border-black border-2 bg-slate-800 rounded"
      >
        <span className="material-symbols-outlined  text-white absolute right-1 top-1 cursor-pointer" onClick={handleLocationModalClose}>close</span>
        <div className="text-blue-300 text-4xl pt-14 ">Search Location</div>
        <input type="text" className="mt-10 w-80 h-7 block" onChange={handleLocationInput} />
        <button className="bg-green-500 text-white text-center rounded-md  h-8 w-24 mt-6"
        onClick={handleSubmitBtn} type="submit">Go !!!</button>
      </div>
      
    </>
  );
};
