import React, { useState, useEffect } from 'react'
import { client } from '../client'
import RecipeCart from './RecipeCart'

//import React from 'react'

function GetRecipes() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        client.getEntries()
            .then((response) => {

                setRecipes(response.items)

            })


    }, [])
    return (
        <>
            {
                recipes.map((recipe, index) =>
                    <RecipeCart key={index} recipe={recipe} />
                )}
        </>
    )
}

export default GetRecipes

