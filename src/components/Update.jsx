import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipe } from '../context/RecipeConext';




const Update = () => {
  const { recipes,updateRecipe } = useRecipe();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({ 
   
    image: '',
    title: '',
    description: '',
    ingredients: '',
    instructions: ''

 })
    
  useEffect(() => {
    // Find the recipe by ID and set it to the state
    const existingRecipe = recipes.find(recipe => recipe.id === id);
    if (existingRecipe) {
      setRecipe(existingRecipe);
    }
  }, [id, recipes]);

  const handleChange = (event) => {
    setRecipe({ ...recipe, [e.target.name]: event.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, recipe);
    navigate('/recipes');
  };
    


  return (
    <form onSubmit={handleSubmit} className="w-[70%] m-auto">
    <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
      Update <br /> Existing Recipe
    </h1>
    <input
      type="url"
      name="image"
      value={recipe.image}
      onChange={handleChange}
      className="w-full border rounded-md px-6 py-3 text-lg mb-5"
      placeholder="Recipe Image URL"
    />
    <input
      type="text"
      name="title"
      value={recipe.title}
      onChange={handleChange}
      className="w-full border rounded-md px-6 py-3 text-lg mb-5"
      placeholder="Recipe Name"
    />
    <textarea
      name="description"
      value={recipe.description}
      onChange={handleChange}
      className="w-full border rounded-md px-6 py-3 text-lg mb-5"
      placeholder="Recipe Description..."
    ></textarea>
    <textarea
      name="ingredients"
      value={recipe.ingredients}
      onChange={handleChange}
      className="w-full border rounded-md px-6 py-3 text-lg mb-5"
      placeholder="Recipe Ingredients -> use comma to separate ingredients..."
    ></textarea>
    <textarea
      name="instructions"
      value={recipe.instructions}
      onChange={handleChange}
      className="w-full border rounded-md px-6 py-3 text-lg mb-5"
      placeholder="Recipe Instructions -> use comma to separate instructions..."
    ></textarea>
    <div className="w-full text-right">
      <button
        type="submit"
        className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200"
      >
        Re-Publish Recipe &nbsp; &#8594;
      </button>
    </div>
  </form>
);
};

export default Update;
