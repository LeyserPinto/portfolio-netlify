import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//React router
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//Routes Components
import Habilidades from './Pages/Habilidades'
import ErrorPage from './Pages/404-page';
import Projetos from './Pages/Projetos';
import SobreMim from './Pages/Sobre-mim';

import Home from './Pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "habilidades",
    element: <Habilidades />,
    errorElement: <ErrorPage />
  },
  {
    path: "/projetos",
    element: <Projetos />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sobre-mim",
    element: <SobreMim />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
