import './SearchBar.scss'

import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'

function SearchBar(props) {

    const changeHandler = (e) => {
        props.changeHandler(e.target.value)
    }

    return (
        <article className="searchBar">

            <BiSearch 
                className="icon"
                onClick={() => props.searchFunc()}
            />

            <input
                type="text"
                placeholder="Pikachu"
                name="data"
                value={props.data}
                onChange={changeHandler}
            />

        </article>
    )
}

export default SearchBar