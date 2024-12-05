import React, { createContext, useContext, useState } from "react";

 const RecipeConext =createContext()


export const RecipeProvider = ({ children }) => {
    
    const [recipes, setrecipes] = useState([]);


    //create recepies code function

    const createRecipe = (newRecipe) => {
        
        setrecipes([...recipes, newRecipe]);


    }


    //update recipe function code

    const updateRecipe = (id, updateRecipe) => {
        setrecipes(recipes.map((recipe) => (recipe.id === id ? updateRecipe : recipe)))

    }
    //delete recipe function code

    const deleteRecipe = (id) => {
    
        setrecipes(recipes.filter((recipe) => recipe.id !== id));

    }



    return (
        <RecipeConext.Provider value={{ recipes, createRecipe, updateRecipe, deleteRecipe }}>
            {children}
        </RecipeConext.Provider>
    )
};
export const useRecipe = () => {
    
    return useContext(RecipeConext)
}
