import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const Detail = () => {

    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) => response.data)
            .then((data) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((error) => {
                window.alert(error)
            })
        return setCharacter({});
    }, [id]);

    return (
        <div>
            <img src={character.image} alt={character.name} />
            <h3>Name: "{character.name}"</h3>
            <h3>Status: "{character.status}"</h3>
            <h3>Species "{character.species}"</h3>
            <h3>Gender: "{character.gender}"</h3>
            <h3>Origin: "{character.origin?.name}"</h3>
        </div>
    )
}

export default Detail