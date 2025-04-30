import { FaBookmark } from "react-icons/fa";
import { useContext } from "react";
import  { FavMeals } from "./states";
import Recipe from "./Recipe";
export default function Favorites() {
  const [favMeals] = useContext(FavMeals);

  return(
    <>
    { !FavMeals ?
      (<div className="flex gap-2 items-center">
        <p>Add a recipe by clicking on the bookmark icon</p>
        <FaBookmark className="text-lg text-green-600"/>
      </div>)
      :
      (<section className="flex-col gap-2 p-3 border rounded-md border-gray-200 w-[55%] mx-auto">
      <h2><strong>My favorites</strong></h2>
      <div className="flex-col gap-2 items-center mt-2 w-full justify-center">
        {
          favMeals.map((meal)=> <Recipe key={meal.idMeal} recipe={meal} />)
        }
      </div>
    </section>)
    }
    </>
  );
}
