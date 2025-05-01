import Header from './components/Header.jsx';
import Recipes from './components/Recipes.jsx';
import Favorites from './components/Favorites.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import { FavMeals } from './components/states.jsx';
import { useState } from "react";

function App() {
  const mealsHook = useState([]);
  const [recipeDetail, setRecipeDetails] = useState({});

  function handleRecipeClick(meal){
    setRecipeDetails(meal);
  }

  return (
    <>
      <Header/>
      <div className="flex gap-0 w-[90%] mx-auto mt-5">
        <FavMeals.Provider value={mealsHook}>
          <Recipes  handleRecipeClick={handleRecipeClick}/>
          <RecipeDetails meal={recipeDetail}/>
          <Favorites />
        </FavMeals.Provider>
      </div>
    </>
  )
}

export default App
