import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import {NavBar} from "./elements/Menu/NavBar";  
import {About} from "./pages/About";


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes >
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes >
      </BrowserRouter>
  );
}

export default App;
