import { FaBookmark } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { useContext} from "react";
import { FavMeals } from "./states";
export default function Recipe({recipe, handleRecipeClick}) {
  const [meals, setMeals] = useContext(FavMeals);

  function handleSaveToFavorites() {
    setMeals([...meals, recipe]);
  }

  function handleRemoveFromFavorites(id) {
    // get all meals from local storage
    const storedMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
    // filter the meals from local storage
    const filteredMeals = storedMeals.filter((meal)=> meal.idMeal !== id);
    // update state with filtered meals
    setMeals(filteredMeals);

  }
  // save recipes to local storage
  localStorage.setItem('favoriteMeals',JSON.stringify([...meals]));


  return(
    <>
      {recipe !== null ?
      <div onClick={()=>handleRecipeClick(recipe)} className="flex w-[300px] border rounded-b-md border-gray-200 items-center mb-3 hover:bg-amber-50">
        <img key={recipe.idMeal} src={recipe.strMealThumb} alt="Recipe Image" className="w-[100px] h-full"/>
        <div className="flex gap-1 items-center justify-between mt-2 p-4">
          <h3 className="font-bold">{recipe.strMeal}</h3>
          <button onClick={handleSaveToFavorites}>
            <FaBookmark className="text-lg text-green-600 hover:text-green-400"/>
          </button>
          <button onClick={()=>handleRemoveFromFavorites(recipe.idMeal)}>
            <IoTrashBinSharp className="text-lg text-green-600 hover:text-green-400"/>
          </button>
        </div>
      </div> :
       <p>There is no such recipe!</p>
      }
    </>
  );
}
