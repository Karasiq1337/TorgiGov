import React from 'react';
import './App.css';
import {NavBar} from "./Menu/NavBar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Menu/HomePage/Home";
import {Torgi} from "./Menu/Torgi/Torgi";
import {useAppSelector} from "./AppHooks";
import RegModal from "./Menu/Authorization/RegModal";
import {Favorites} from "./Menu/Favorites/Favorites";
import {CompareLotsRent} from "./Menu/CompareLots/CompareLotsRent";
import {BestOptionProperty} from "./Menu/BestOption/BestOption";
import {AuthModal} from "./Menu/Authorization/AuthModal";
import {Statistic} from "./Menu/Statistic/Statistic";
import {CompareLotsSale} from "./Menu/CompareLots/CompareLotsSale";


function App(){
    const regClicked : boolean = useAppSelector((state) => state.reducer.auth.regClicked);
    const persistor = useAppSelector((state) => state.reducer)

  return (  
      <>
          <header>
              <NavBar></NavBar>
          </header>
          <body>
          <>
              {<AuthModal/>}
              {regClicked && <RegModal/>}
              <Routes>
                  <Route path={"/home"} element={<Home/>}/>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/search"} element={<Torgi/>}/>
                  <Route path={'/favorites'} element={<Favorites/>}/>
                  <Route path={'/CompareRent'} element={<CompareLotsRent/>}/>
                  <Route path={'/CompareSale'} element={<CompareLotsSale/>}/>
                  <Route path={'/BestOption'} element={<BestOptionProperty/>}/>
                  <Route path={'/Statistic'} element={<Statistic/>}/>
              </Routes>
          </>
          </body>
          <footer>
          </footer>
      </>
  );
}

export default App;
