import React from 'react'


const RecipeCart = ({ recipe }) => {

    return (
        <div className="first row d-flex justify-content-center">
            <div className="title  col-md-4 mt-3">
                <h1 >{recipe.fields.title}</h1>
            </div>
            <div className="second row">
                <p className="description col-md-8 mx-auto pt-2 mt-4">
                    {recipe.fields.description}
                </p>
            </div>
            <div className="third row">
                <div className="ing col-md-4 d-flex justify-content-center pt-2">
                    <div>
                        Ingredients
                    </div>
                    <ul>
                        {recipe.fields.ingred.map(ing => <li>{ing}</li>)}
                    </ul>
                </div>
                <div className=' col-md-8 m col-sm-4 col-xs-12'>
                    <div className="row justify-content-center">
                        <div className='col-md-4'>
                            <img className="image " src={recipe.fields.images.fields.file.url + '?w=450&h=450'} alt={recipe.fields.title} />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default RecipeCart

{ /*<div className={"recipe.fields.title"}*/ }
{ /* </div> */ }