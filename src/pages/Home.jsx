import { useLocation } from "../context/location-context";
import { Temperature } from "../components/Temperature";
import { Weather } from "../components/Weather";
import { Humidity } from "../components/Humidity";
import { Fragment } from "react";

export const Home = () => {
  // location context
  const {data}=useLocation()
console.log(data)

  return (
    <Fragment >
      <Temperature temp={data.list} key={data.id}/>
      <Weather  props={data}  />
      <Humidity wind={data.list} key={data.id}/>
     </Fragment>
  );
};
