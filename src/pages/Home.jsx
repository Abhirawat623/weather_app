import { useLocation } from "../context/location-context";
import { Temperature } from "../components/Temperature";
import { Humidity } from "../components/Humidity";
import { Weather } from "../components/Weather";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate=useNavigate()
  // location context
  const {data,locationDispatch}=useLocation()
const handleHomeBtn=()=>{
locationDispatch({
  type:"DATA",
  payload:""
},{
  type:"LOCATION",
  payload:""
})

navigate("/")
  window.location.reload(true);
}
const cityName= data.city.name;

  return (
    <Fragment >
      <div className="bg-[url('./main-bg.png')] bg-repeat h-screen xl:bg-none bg-cover">
      <Temperature temp={data.list} key={data.id}/>
      <Humidity wind={data.list} key={data.id}/>
      <Weather wind={data.list} key={data.id}/>
      </div>
      <div className="absolute top-5 left-5 flex gap-x-3">
      <button  className="bg-slate-800 text-white text-center rounded-l-3xl  h-8 w-24 mb-4 "
          onClick={handleHomeBtn}
          > Home</button>
          <span className="text-5xl xl:text-7xl font-bold text-center relative ">{cityName}</span>
          </div>
     </Fragment>
  );
};
