import { Routes,Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Productes } from "./Pages/Productes";
import { Contacts } from "./Pages/Contacts";
import './App.css'


function App() {

  return (
    <>
     <Routes>   
          <Route path='/' element={<Home/>}/>
          <Route path="/productes" element={<Productes/>}/>
          <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </>
  )
}

export default App
