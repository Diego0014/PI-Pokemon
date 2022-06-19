import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllPokemons} from "../../store/actions";
import Pokemon from "../pokemon/pokemon";
import Pagination from "../pagination/pagination";

export default function Pokemons() {
  const dispatch = useDispatch();
  let allPokemons = useSelector((state) => state.pokemons);
  console.log(allPokemons);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const maxPage = Math.ceil(allPokemons.length / perPage);
  useEffect(
    () => {
      dispatch(getAllPokemons());
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="pokemons">
      {allPokemons
        .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} />
        ))}
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </div>
  );
}
