export const recipeData = async () => {
  const res = await fetch("http://localhost:3100/recipes");
  const fetchData = await res.json();
  return fetchData;
};

export const addRecipeData = async (recipe) => {
  const res = await fetch("http://localhost:3100/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  const newRecipe = await res.json();
  return newRecipe;
};
