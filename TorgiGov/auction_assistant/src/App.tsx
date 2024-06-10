import React from 'react';
import './App.css';
import {NavBar} from "./Menu/NavBar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Menu/HomePage/Home";
import {Provider} from "react-redux";
import {persistor, store} from "./AppStore"
import {PersistGate} from "redux-persist/integration/react";

function App(){
  return (  
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <header>
                  <NavBar></NavBar>
              </header>
              <Routes>
                  <Route path={"/home"} element={<Home/>}/>
              </Routes>
              <footer>
              </footer>
          </PersistGate>
      </Provider>
  );
}

export default App;
