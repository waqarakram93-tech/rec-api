import React from 'react'


const RecipeCart = ({ recipe }) => {
    const splitIng = recipe.ingredients.split(",");

    return (
        <div className="first row ">
            <div className="title  col-md-12 mt-3 d-flex justify-content-center">
                <h1 >{recipe.title}</h1>
            </div>
            <div className="second row">
                <p className="description col-md-8 mx-auto pt-2 mt-4">
                    {recipe.description}
                </p>
            </div>
            <div className="third row ">
                <div className="ing col-md-4 d-flex justify-content-center mt-5">
                    <div className="Ing col-md-6">
                        Ingredients

                    </div>
                    <ul>

                        {splitIng.map(ingredient => <li>{ingredient}</li>)}
                    </ul>
                </div>
                <div className=' col-md-8  col-sm-4 col-xs-12'>
                    <div className="row ml-5 justify-content-center ">
                        <div className='col-md-4 '>
                            <img className="image " src={recipe.imgurl + '?w=300&h=300'} alt='recipe' />
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