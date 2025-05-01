
export default function RecipeDetails({meal}) {

  const filteredIngredients = [];
  Object.entries(meal).forEach(([key,value])=>{
    if(key.includes('strIngredient')){
      (value !== null && value !== "")  && filteredIngredients.push(value)
    }
  });

  console.log(meal);
  return(
    <>
    {Object.keys(meal).length !== 0 ?
    <section className="w-[39%] gap-2 flex-col items-center justify-center mx-3 p-4 border rounded-md border-gray-200 overflow-scroll h-[80dvh]">
      <h1 className="text-2xl text-center text-green-600 my-3"><strong>{meal.strMeal}</strong></h1>
        <img src={meal.strMealThumb} alt="Recipe Image" className="w-[100%] h-[200px] rounded-md"/>
        <div className="flex-col justify-around my-5">
          <h3 className="text-2xl text-green-600 my-4"><strong>Ingredients:</strong></h3>
          <ul>
            {filteredIngredients.map((ingredient,index) => {
              return <li key={index} className="capitalize">{index+1}. {ingredient}</li>
            })}
          </ul>
      </div>
      <h3 className="text-2xl text-green-600 my-4"><strong>Instructions:</strong></h3>
      <p className="">{meal.strInstructions}</p>
    </section>
    : <div className="w-[30%] mx-10"><h2 className="text-2xl text-green-600 "><strong>Select a meal!</strong></h2></div>
    }
  </>
  );
}
