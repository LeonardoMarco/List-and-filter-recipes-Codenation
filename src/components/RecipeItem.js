import React from 'react'


const RecipeItem = (props) => {
    return (
        <div className="col-sm-3 mt-4">
            <div className="card">
                <img className="card-img-top img-fluid" src={props.recipes.thumbnail} alt="img thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{props.recipes.title}</h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>{props.recipes.ingredients}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem;