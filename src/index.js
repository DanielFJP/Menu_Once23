import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cafes from '../src/pages/Cafes.js';
import Cervezas from '../src/pages/Cervezas';
import Licores from '../src/pages/Licores';
import Shots from '../src/pages/Shots';
import SinAlcohol from './pages/SinAlcohol';
import Precio from './pages/Precio';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Musica from './pages/Musica';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:"ERROR"
  },
  {
    path: "/Cafes",
    element: <Cafes />,
    errorElement:"ERROR"
  },
  {
    path: "/Cervezas",
    element: <Cervezas />,
    errorElement:"ERROR"
  },
  {
    path: "/Licores",
    element: <Licores />,
    errorElement:"ERROR"
    
  },
  {
    path: "/Shots",
    element: <Shots />,
    errorElement:"ERROR"
  },
  {
    path: "/SinAlcohol",
    element: <SinAlcohol />,
    errorElement:"ERROR"
  },
   {
    path: "/Musica",
    element: <Musica/>,
    errorElement:"ERROR"
  },
  {
    path: "/Precio",
    element: <Precio/>,
    errorElement:"ERROR"
   }
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>
);

