import Header from './components/Header.jsx';
import Recipes from './components/Recipes.jsx';
import Favorites from './components/Favorites.jsx';
import { FavMeals } from './components/states.jsx';
import { useState } from "react";

function App() {
  const mealsHook = useState([]);

  return (
    <>
      <Header/>
      <div className="flex gap-4 w-[80%] mx-auto mt-5">
        <FavMeals.Provider value={mealsHook}>
          <Recipes />
          <Favorites />
        </FavMeals.Provider>
      </div>
    </>
  )
}

export default App
