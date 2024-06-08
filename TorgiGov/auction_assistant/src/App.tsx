import React from 'react';
import './App.css';
import {NavBar} from "./Menu/NavBar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Menu/HomePage/Home";
import {Authorization} from "./Menu/Authorization/Authorization";


function App() {
  return (
      <>
          <header>
              <NavBar></NavBar>
          </header>
          <Routes>
              <Route path={"/home"} element={<Home/>}/>
              <Route path={"/login"} element={<Authorization/>}/>
          </Routes>
          <footer>
          </footer>
      </>

  );
}

export default App;
