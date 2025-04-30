import { FaBookmark } from "react-icons/fa";
import { useContext} from "react";
import { FavMeals } from "./states";
export default function Recipe({recipe}) {
  const [meals, setMeals] = useContext(FavMeals);

  function handleSaveToFavorites() {
    setMeals([...meals, recipe]);
  }

  return(
    <>
      {recipe !== null ?
      <div className="flex w-[300px] border rounded-b-md border-gray-200 items-center mb-3">
        <img key={recipe.idMeal} src={recipe.strMealThumb} alt="Recipe Image" className="w-[100px] h-full"/>
        <div className="flex gap-1 items-center justify-between mt-2 p-4">
          <h3 className="font-bold">{recipe.strMeal}</h3>
          <button onClick={handleSaveToFavorites}>
            <FaBookmark className="text-lg text-green-600 hover:text-green-400"/>
          </button>
        </div>
      </div> :
       <p>There is no such recipe!</p>
      }
    </>
  );
}
