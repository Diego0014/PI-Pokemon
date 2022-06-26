import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pokemons from "./components/pokemons/pokemons";
import PokemonDetail from "./components/pokemonDetail/pokemonDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
