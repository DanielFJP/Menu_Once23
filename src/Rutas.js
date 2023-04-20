import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from './App.js';
import { Cafes } from './pages/Cafes.js';
import { Cervezas } from './pages/Cervezas.js';
import { Licores } from './pages/Licores.js';
import { Precio } from './pages/Precio.js';
import { Shots } from './pages/Shots.js';
import { SinAlcohol } from './pages/SinAlcohol.js';
import { Musica } from './pages/Musica.js';

export function Rutas() {
    return (
    <div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cafes" element={<Cafes />} />
                <Route path="/cervezas" element={<Cervezas />} />
                <Route path="/licores" element={<Licores />} />
                <Route path="/precio" element={<Precio />} />
                <Route path="/shots" element={<Shots />} />
                <Route path="/sinalcoholysnaks" element={<SinAlcohol />} />
                <Route path="/musica" element={<Musica />} />
            </Routes>  
     </div>


    );

}