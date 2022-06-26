import React from "react";
import { Link } from "react-router-dom";

export default function Pokemon({ id, name, types, image }) {
  return (
    <div className="pokemon">
      <img src={image} alt={name} />
      <ul>
        {types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <div>
        <p>{name[0].toUpperCase() + name.substring(1)}</p>
        <Link to={`/pokemons/${id}`}>More info</Link>
      </div>
    </div>
  );
}
