import React from "react";
import { Link } from "react-router-dom";

export default function Pokemon({ id, name, types, image }) {
  return (
    <div className="pokemon">
      <Link to={`/home/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt={name} />
      <ul>
        {types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
    </div>
  );
}
