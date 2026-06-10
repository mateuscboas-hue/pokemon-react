import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Jogador from './Pages/Jogador'

function App() {
  return (
      <BrowserRouter>
       <Routes>
        <Route path="/pokemon-react/"  element={<Home/>}  />
        <Route
        path="/pokemon-react/:jogadorId"
        element={<Jogador/>} 
        />
       </Routes>

      </BrowserRouter>

  )
 
}

export default App;
