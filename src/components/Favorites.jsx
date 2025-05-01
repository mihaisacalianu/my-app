import { FaBookmark } from "react-icons/fa";
import { useContext,useEffect } from "react";
import  { FavMeals } from "./states";
import Recipe from "./Recipe";
export default function Favorites() {
  const [favMeals,setFavMeals] = useContext(FavMeals);

  // get items from local storage
    useEffect(()=>{
      const favMealsLocal = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
      setFavMeals(favMealsLocal);
    },[setFavMeals])

  return(
    <>
    { !favMeals ?
      (<div className="flex gap-2 items-center">
        <p>Add a recipe by clicking on the bookmark icon</p>
        <FaBookmark className="text-lg text-green-600"/>
      </div>)
      :
      (<section className="overflow-scroll flex-col gap-2 p-3 border rounded-md border-gray-200 w-[30%]  h-[80dvh] text-center">
        <h2 className="text-2xl"><strong>My Favorites</strong></h2>
        <div className=" flex flex-col gap-2 items-center mt-3">
          {
            favMeals.map((meal)=> <Recipe key={meal.idMeal} recipe={meal} />)
          }
        </div>
      </section>)
    }
    </>
  );
}
