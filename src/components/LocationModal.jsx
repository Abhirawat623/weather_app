
import { useModal } from "../context/modal-context"
export const LocationModal =()=>{
    const { setIsLocationModalOpen} =useModal();
 //modal close
 const handleLocationModalClose=()=>{
   
    setIsLocationModalOpen(false)
 }


    return(
        <>
        <div className="bg-red h-6 w-6 translate top-2/4 left-2/4 absolute">2ryyyyyyyyyyyyyyyyyyyyyyyt3</div>
        <div onClick={handleLocationModalClose}>X</div></>
    )
}
