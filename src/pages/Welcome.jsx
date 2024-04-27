import {Link} from "react-router-dom"
import { useModal } from "../context/modal-context"
import { LocationModal } from "../components/LocationModal"
import { Footer } from "../components/Footer"
import {Toaster} from "alert"
export const Welcome =()=>{
    const {isLocationModalOpen, setIsLocationModalOpen} =useModal();
 //modal open
 const handleLocationModal=()=>{
setIsLocationModalOpen(true)
 }

    return(
        <div className="xl:bg-[url('./bg.jpg')] xl:h-screen">
        <div className="flex flex-col justify-center items-center pt-10 xl:w-fit xl:bg-slate-100 rounded-md
        translate top-2/4 left-2/4 absolute"  >
           <div className="text-center "><h2 className="text-2xl xl:text-3xl font-black ">How's The Weather Today?</h2></div>
           <div className="object-fit h-102 w-102"><img src="./img_1.png"/></div>
           <button  className="bg-slate-800 text-white text-center rounded-md h-8 w-96 mb-4"
           onClick={handleLocationModal}>Today's Weather</button>
        </div>
        
       <div> {isLocationModalOpen && <LocationModal />}</div>
       <Footer/>
       <Toaster/>
       </div>
       
    )
}