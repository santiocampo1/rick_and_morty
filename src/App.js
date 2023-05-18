import "./App.css";
import Nav from "./Components/Nav/Nav";
import Cards from "./Components/Cards/Cards";
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
