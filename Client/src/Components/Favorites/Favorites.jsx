import Card from "../Card/Card"
import { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { orderCards, filterCards } from "../../redux/actions"

const Favorites = ({ myFavorites }) => {

    const [aux, setAux] = useState(false)



    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
            <select onChange={handleOrder}>
                <option value="A">Ascending order</option>
                <option value="D">Descending order</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Genderless" >Genderless</option>
                <option value="unknown" >Unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>


            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            status={fav.status}
                            species={fav.species}
                            gender={fav.gender}
                            origin={fav.origin.name}
                            image={fav.image}
                        />
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)

