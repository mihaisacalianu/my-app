import Header from './components/Header.jsx';
import Recipes from './components/Recipes.jsx';
import Favorites from './components/Favorites.jsx';

function App() {
  return (
    <>
      <Header/>
      <div className="flex gap-5 w-[80%] mx-auto mt-5">
        <Recipes/>
        <Favorites/>
      </div>
    </>
  )
}

export default App
