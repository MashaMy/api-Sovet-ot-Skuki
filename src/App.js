import { useState } from 'react';
import { useEffect } from 'react';
import video from "./food.mp4";
import './App.css';
import MyResepiesComponent from './MyResepiesComponent';


function App() {

    const MY_ID = "b7df49e6&"
    const MY_KEY = "9541cb1025424b710369bdc08e091822%09"

    const [mySearch, setMySearch ] = useState("");
    const [myRecepies, setMyRecepies ] = useState([]);
    const [wordSumbitted, setWordSumbitted ] = useState ("avocado");


useEffect(() => {
const getRecipe = async () => {
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSumbitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await response.json();
setMyRecepies (data.hits);
}
getRecipe()
}, [wordSumbitted])

const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
}

const finalSerches = (e) => {
e.preventDefault()
setWordSumbitted(mySearch)
}

return(
    <div className="App">
  <div className="container">
  <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
<h1>Find a Recipe</h1>
  </div>

  <div className='container'>
     <form onSubmit={finalSerches}>
         <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
    </form>
</div>

<div className='container'>
     <button onClick={finalSerches}>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>

{myRecepies.map((element, index) => (

< MyResepiesComponent key={index}
label = {element.recipe.label} 
image = {element.recipe.image} 
calories = {element.recipe.calories} 
ingredients = {element.recipe.ingredientLines}/>
))}

  </div>
);

}

export default App;