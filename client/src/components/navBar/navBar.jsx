//crear una navbar con una imagen de logo y una lista de opciones
//imagen de va a ser logo icon y clickearla va a cambiar llevar a pagina de inicio 
//una opcion para ir a la pagina de inicio
//una opcion para filtrar por tipo de pokemon
//una opcion para filtrar por pokemon existente en la api o base de datos
//una opcion para filtrar pokemons por nombre
//una opcion para filtrar pokemons ataque

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
   

    return (
        <div className="navBar">
            <div className="logo">
                <img src="./icon.png" alt="logo" />
            </div>
            <div className="options">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/pokemons">Pokemons</Link>
                    </li>
                    <li>
                        <Link to="/types">Tipos</Link>
                    </li>
                    <li>
                        <Link to="/about">Acerca de</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

