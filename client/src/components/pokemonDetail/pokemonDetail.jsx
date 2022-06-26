import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DogDetail() {
  const [pokemon, setPokemon] = useState(null);
  let { id } = useParams();
  useEffect(
    () => {
      axios.get(`http://localhost:3001/api/pokemons/${id}`).then((response) => {
        setPokemon(response.data);
      });
      return () => {
        setPokemon(null);
      };
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div>
      {pokemon ? (
        <>
          <div>
            <img src={pokemon.image} alt="" value={pokemon.name} />
          </div>
          <div>
            <h3>{pokemon.name}</h3>
            <p>id: {pokemon.id}</p>
            <ul>
              {pokemon.types.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.name}>{stat.name} {stat.value}</li>
              ))}
            </ul>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
