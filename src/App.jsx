import {Route,Routes} from "react-router-dom";
import { Welcome } from "./pages/Welcome"
import {Home} from "./pages/Home"
import "./App.css"
function App() {


  return (
    <Routes>
      <Route path="/" element={ <Welcome/>} />
      <Route path="home" element={ <Home/>} />
    </Routes>
  
  )
}

export default App
