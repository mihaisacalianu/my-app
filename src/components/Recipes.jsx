import Recipe from "./Recipe.jsx"
import { useState, useRef,useEffect } from "react";
import {fetchData} from "../fetch.js"

export default function Recipes({handleRecipeClick}) {
  const [recipeTyped, setRecipeTyped] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [recipeFetched, setRecipeFetched] = useState({});
  const userInput = useRef();

  useEffect(()=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeTyped}`;
    async function fetchMeals(){
      setIsFetching(true);
      try {
        const data = await fetchData(url);
        setRecipeFetched(data);
        } catch (error) {
          alert(error.message);
        }
      setIsFetching(false);
    }
    fetchMeals();
  },[recipeTyped]);



  function handleSearchButton() {
    setRecipeTyped(userInput.current.value);
  }
  return(
    <section className="flex-col gap-2 w-[29%] overflow-scroll h-[80dvh]">
      <h2>Browse recipes by ingredient</h2>
      <div className="flex gap-3 mt-2">
        <input
        ref={userInput}
        type="text"
        placeholder="Search for a recipe..."
        className="border rounded-md border-gray-200 p-1"
        />
        <button
        className="bg-green-600 text-white py-0.4 px-2 rounded-sm hover:bg-green-400"
        onClick={()=>handleSearchButton()}
        >Search</button>
      </div>
      <div className="flex-col justify-center mt-4">
        {recipeTyped && recipeFetched !== null ?
         recipeFetched.map((recipe)=><Recipe handleRecipeClick={handleRecipeClick} key={recipe.idMeal} recipe={recipe} />)
         : !recipeTyped ? <p>Your Meals!</p> : <p>No Such Meal!</p>
         }
      </div>
    </section>
  );
}
