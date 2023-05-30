import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { addFav, removeFav } from "../../redux/actions"
import { connect } from "react-redux"

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {

    const [isFav, setIsFav] = useState(false)

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            removeFav(id);
        } else {
            setIsFav(true)
            addFav({ id, name, status, species, gender, origin, image })
        }
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true);
            }
        });
    }, [myFavorites]);

    return (
        <div>
            {
                isFav ? (
                    <button onClick={handleFavorite}>❤️</button>
                ) : (
                    <button onClick={handleFavorite}>🤍</button>
                )
            }
            <button onClick={() => onClose(id)}>x</button>
            <Link to={`/detail/:${id}`} >
                <h1>{name}</h1>
            </Link>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <h3>{origin}</h3>
            <img src={image} alt="character image" />

        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => { dispatch(addFav(character)) },
        removeFav: (id) => { dispatch(removeFav(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)

