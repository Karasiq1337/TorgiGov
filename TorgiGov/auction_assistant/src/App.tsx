import React from 'react';
import './App.css';
import {NavBar} from "./Menu/NavBar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Menu/HomePage/Home";

function App() {
  return (
      <>
          <header>
              <NavBar></NavBar>
          </header>
          <Routes>
              <Route path={"/home"} element={<Home/>}/>
          </Routes>
          <footer>
          </footer>
      </>

  );
}

export default App;
