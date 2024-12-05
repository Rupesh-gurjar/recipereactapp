import { Link,  useNavigate, useParams } from "react-router-dom";
import { useRecipe } from "../context/RecipeConext";
import { useEffect } from "react";
const Details = () => {
  const { id } = useParams();
  const { recipes, deleteRecipe } = useRecipe();
const navigate = useNavigate()
  // find recipe by id
  const dish = recipes.find((recipe) => recipe.id === id);
  useEffect(() => {
    if (!dish) {
      navigate('/recipes');
    }
  }, [dish, navigate]);

  if (!dish) {
    return <div className="text-center mt-4">No recipes found</div>;
  }

  //function delete handle code

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/recipes');

}


  
  return (
    <div className="w-[80%] m-auto p-5">
      <Link to="/recipes" className="text-3xl ri-arrow-left-line"></Link>
      <div className="details w-full flex h-[75vh] mt-3">
        <div className="dets w-[50%] p-[3%] shadow">
          <img className="w-full h-auto" src={dish.image} alt={dish.title} />
          <h1 className="text-xl mb-5 mt-[10%] text-center">{dish.title}</h1>
          <p className="text-zinc-400">{dish.description}</p>
          <div className="flex justify-between py-10 px-5">
            <Link
              to={`/update-recipe/${id}`}
              className="text-blue-400 border-blue-400 border py-2 px-5"
            >
              Update
            </Link>
            <button onClick={handleDelete} className="text-red-400 border-red-400 border py-2 px-5">
              Delete
            </button>
          </div>
        </div>
        <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
          <h1 className="text-3xl border-b border-green-600 text-green-600">
            Ingredients
          </h1>
          <ul className="text-zinc-600 list-disc  p-3 ">
            {dish.ingredients.split(",").map((d, i) => (
              <li className="list-item text-sm  mb-2" key={i}>
                {d}
              </li>
            ))}
          </ul>
          <h1 className="text-3xl border-b border-green-600 text-green-600">
            Instructions
          </h1>
          <ul className="text-zinc-600 list-decimal  p-3 ">
            {dish.instructions.split(".").map((d, i) => (
              <li className="list-item text-sm  mb-2" key={i}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
