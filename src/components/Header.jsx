import { GiMeal } from "react-icons/gi";
export default function Header() {
  return(
    <header className="w-[100dvw] shadow-lg p-5 bg-linear-to-r from-yellow-200 to-orange-300">
      <div className="w-[60%] mx-auto flex-col gap-1 items-center text-center">
        <div className="flex items-center gap-2 text-center justify-center mb-3">
          <h1 className="text-2xl">Recipe Book</h1>
          <GiMeal className="text-4xl text-green-600"/>
        </div>
        <p>Let's use The Meal DB API to save some delicious recipes</p>
      </div>
    </header>
  );
}
