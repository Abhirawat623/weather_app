// import { useLocation } from "../context/location-context";
import { Temperature } from "../components/Temperature";
// import { Weather } from "../components/Weather";
import {Humidity} from "../components/Humidity"
export const Home = () => {
  //location context
  // const {location,data}=useLocation()
  // console.log(data)
  return (
    <section>
      <Temperature />
      <Humidity/>
      <div className="absolute right-6 top-10">
        {/* <Weather /> */}
      </div>
    </section>
  );
};
