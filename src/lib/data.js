export const recipeData = async () => {
  const res = await fetch("http://localhost:3100/recipes");
  const fetchData = await res.json();
  return fetchData;
};
