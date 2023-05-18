import { useState } from "react"

const SearchBar = ({ onSearch }) => {

    const [id, setId] = useState('')

    const handleChange = (event) => {
        setId(event.target.value)
    }

    return (
        <div>
            <input onChange={handleChange} value={id} placeholder='Introduce a number...' type="text" />
            <button onClick={() => { onSearch(id); setId('') }}>Add</button>
        </div>
    )

}

export default SearchBar
