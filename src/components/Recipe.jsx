import margeritaImg from "../assets/margerita.webp";
export default function Recipe({isLoading, recipe}) {
  console.log(recipe);
  return(
    <>
      {isLoading ? <p>Loading meals.....</p> :
        <button className="flex-col w-[200px] text-center border rounded-b-md border-gray-200 h-[280px]">
          <img src={margeritaImg} alt="Recipe Image" className="w-[200px] h-[180px]" />
          <h3 className="mt-4 p-2">{recipe.data.meals[0].strMeal}</h3>
        </button>
      }
    </>
  );
}
