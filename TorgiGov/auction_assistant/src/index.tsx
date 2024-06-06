import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Authorization} from "./Menu/Authorization/Authorization";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import {NavBar} from "./Menu/NavBar";
import {Home} from "./Menu/HomePage/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div></div>,
    },
    {
        path: "login",
        element: <Authorization/>
    },
    {
        path: "Home",
        element: <Home/>
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <BrowserRouter>
        <App/>  
    </BrowserRouter>
  </React.StrictMode>
);

