import "./App.css";
import Form from "./Components/Form/Form";
import Nav from "./Components/Nav/Nav";
import Cards from "./Components/Cards/Cards";
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";
import Favorites from "./Components/Favorites/Favorites";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// const email = "sanntiocampo@gmail.com";
// const password = "fullstack1";
const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;

      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
