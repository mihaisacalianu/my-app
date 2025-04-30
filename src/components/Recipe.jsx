export default function Recipe({isLoading, recipe}) {
  return(
    <>
      {recipe != null ? isLoading ? <p>Loading meals.....</p> :
        <button className="flex-col w-[200px] text-center border rounded-b-md border-gray-200 h-[280px]">
          <img src={recipe[0].strMealThumb} alt="Recipe Image" className="w-[200px] h-[180px]" />
          <h3 className="mt-4 p-2">{recipe[0].strMeal}</h3>
        </button>
      : <p>There is no such recipe!</p>
      }

    </>
  );
}
