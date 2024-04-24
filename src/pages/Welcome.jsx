import {Link} from "react-router-dom"
import { useModal } from "../context/modal-context"
import { LocationModal } from "../components/LocationModal";
export const Welcome =()=>{
    const {isLocationModalOpen, setIsLocationModalOpen} =useModal();
 //modal open
 const handleLocationModal=()=>{
setIsLocationModalOpen(true)
 }

    return(
        <div >
        <div className="flex flex-col justify-center items-center p-24" >
           <h2 className="text-3xl font-black">How's The Weather Today?</h2>
           <img className="h-96 " src="./img_1.png"/>
           <button  className="bg-slate-800 text-white text-center rounded-md h-8 w-96 xl:mt-24"
           onClick={handleLocationModal}>Today's Weather</button>
        </div>
       <div> {isLocationModalOpen && <LocationModal />}</div></div>
    )
}