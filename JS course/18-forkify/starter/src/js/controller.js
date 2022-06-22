import * as model from './model.js';
import recipeView from './views/recipeView.js';

// Browser support
import 'core-js/stable'; // pollyfying everything else
import 'regenerator-runtime/runtime'; // pollyfilling async-await

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    // 1) Loading recipe
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(`Sorry, there's an error: ${err}`);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
