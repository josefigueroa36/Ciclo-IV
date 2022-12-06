import React from "react";
import { Routes,Route } from 'react-router-dom'
import { Login } from "./components/Login"
import { Inicio } from "./components/Inicio"
import { Registro } from "./components/Registro"
import { CrearOrden } from "./components/CrearOrden"
import { EditarOrden } from "./components/EditarOrden"
import { Dashboard } from "./components/Dashboard";
function App() {

  return (
    <div className="App">
      
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Registro" element={<Registro/>} />
          <Route exact path="/Dashboard" element={<Dashboard/>} />          
          <Route exact path="/CrearOrden" element={<CrearOrden/>} />
          <Route exact path="/EditarOrden" element={<EditarOrden/>} />
        </Routes>
      


    </div>
  )
}

export default App
