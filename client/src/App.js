import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pokemons from "./components/pokemons/pokemons";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Pokemons />} />
      </Routes>
    </div>
  );
}

export default App;
