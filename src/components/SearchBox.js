import React, { useState } from 'react'

function SearchBox({ setQuery }) {



    const [search, setSearch] = useState("");


    const updateSearch = e => {
        setSearch(e.target.value);

    }
    const getSearch = e => {
        e.prevenDefault();
        setQuery(search);
    }
    return (
        <div>
            <form onSubmit={getSearch} className="search-bar d-flex col-md-12 justify-content-center">
                <input className='form-control col-md-10' aria-label="Search" type="text" value={search} onChange={updateSearch} />
                <input type='submit' className='btn btn-outline-success' value='Search' />
            </form>
        </div>
    )
}

export default SearchBox

// type='form-control me-2 '






