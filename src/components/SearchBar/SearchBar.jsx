import './SearchBar.scss'

import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'

function SearchBar() {

    const [data, setData] = useState('')

    // updates form(search) field
    const changeHandler = (e) => {
        setData(e.target.value)
    }

    return (
        <article className="searchBar">

            <BiSearch className="icon" />

            <input
                type="text"
                placeholder="Pikachu"
                name="data"
                value={data}
                onChange={changeHandler}
            />

        </article>
    )
}

export default SearchBar