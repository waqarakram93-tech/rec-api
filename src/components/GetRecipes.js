import React, { useState, useEffect } from 'react'
//import { client } from '../client'
import RecipeCart from './RecipeCart'
import SearchBox from './SearchBox'


function GetRecipes() {

    const [loading, setLoading] = useState(true)
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken')



    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8000/recipes?q=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setRecipes(data.recipes)
                setLoading(false)
            })


    }, [query])
    if (loading) return <>Loading</>

    return (
        <>

            {
                recipes.map((recipe, index) =>
                    <RecipeCart key={index} recipe={recipe} />
                )}
            <SearchBox query={query} setQuery={setQuery} />

        </>
    )
}

export default GetRecipes

