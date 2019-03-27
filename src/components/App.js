import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      recipes: recipes.results,
    };

    this.handleInputChange = this.handleInputChange.bind(this)
  }


  handleInputChange = (e) => {
    this.setState({ searchString: e })

    let filterRecipe = recipes.results.filter(function (recipe) {
      return recipe.title.toLowerCase().indexOf(e.toLowerCase()) !== -1 || recipe.ingredients.toLowerCase().indexOf(e.toLowerCase()) !== -1
    })

    this.setState({ recipes: filterRecipe })

  }


  render() {
    return (
      <div className="App">
        <Navbar
          recipes={this.recipes}
          text={this.state.searchString}
          search={(e) => this.handleInputChange(e)}
        />
        <div className="container mt-10">
          <div className="row">
            {this.state.recipes.length > 0 ?
              this.state.recipes.map((recipe, i) => {
                return <RecipeItem recipes={recipe} key={i} />
              }) :
              <div className="w-100 mt-5"><h3 className="text-center">No Results to show</h3></div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
