import React, {useState} from 'react';
import './App.css';
import {NavBar} from "./Menu/NavBar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Menu/HomePage/Home";
import {Provider} from "react-redux";
import {persistor, store} from "./AppStore"
import {PersistGate} from "redux-persist/integration/react";
import {Torgi} from "./Menu/Torgi/Torgi";
import {useAppSelector} from "./AppHooks";
import RegModal from "./Menu/Authorization/RegModal";

function App(){
    const regClicked = useAppSelector((state) => state.authReducer.regClicked); 
    
  return (  
      <>
          <header>
              <NavBar></NavBar>
          </header>
          <body>
          {regClicked && <RegModal/>}
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/search"} element={<Torgi/>}/>
            </Routes>
          </body>
          <footer>
          </footer>
      </>
  );
}

export default App;
