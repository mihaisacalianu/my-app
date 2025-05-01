
export default function RecipeDetails({meal}) {

  const filteredIngredients = [];
  Object.entries(meal).forEach(([key,value])=>{
    if(key.includes('strIngredient')){
      (value !== null && value !== "")  && filteredIngredients.push(value)
    }
  }
);
  return(
    <>
    {meal &&
    <section className="w-[45%] gap-2 flex-col items-center justify-center mx-3 p-3 border rounded-md border-gray-200 overflow-scroll h-[80dvh]">
      <h1 className="text-2xl text-center">{meal.strMeal}</h1>
      <div className="flex justify-around my-5">
        <img src={meal.strMealThumb} alt="Recipe Image" className="w-[250px] h-[220px] rounded-md"/>
        <ul className="">
          {filteredIngredients.map((ingredient,index) => {
            return <li key={index}>{index+1}. {ingredient}</li>
          })}
        </ul>
      </div>
      <p className="">{meal.strInstructions}</p>
    </section>
  }
  </>
  );
}
