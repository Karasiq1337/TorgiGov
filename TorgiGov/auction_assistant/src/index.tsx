import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Authorization} from "./Menu/Authorization/Authorization";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import {NavBar} from "./Menu/NavBar";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "login",
        element: <Authorization/>
    },
    {
        path: "Home",
        element: <a/>
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App/>
  </React.StrictMode>
);

