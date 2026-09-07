export const recipeData = async () => {
  const res = await fetch("http://localhost:3100/recipes");
  const fetchData = await res.json();
  return fetchData;
};
export const recipeSingleData = async (id) => {
  const res = await fetch(`http://localhost:3100/recipes/${id}`, {
    method: "GET",
  });
  const data = await res.json(id);
  return data;
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

export const likeIncrease = async (id) => {
  const res = await fetch(`http://localhost:3100/recipes/${id}`, {
    method: "PATCH",
  });
  const data = await res.json();
  return data;
};

export const savedRecipe = async (recipe) => {
  const res = await fetch(`http://localhost:3100/recipes/savedrecipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  const data = res.json();
  return data;
};

export const reportSend = async (report) => {
  const res = await fetch("http://localhost:3100/recipes/report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  });
  const data = res.json;

  return data;
};
