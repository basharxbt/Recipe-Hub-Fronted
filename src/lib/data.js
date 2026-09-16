export const recipeData = async () => {
  const res = await fetch("http://localhost:3100/recipes", {
    method: "GET",
  });
  const fetchData = await res.json();
  return fetchData;
};
export const searchRecipe = async (search) => {
  const url = search
    ? `http://localhost:3100/recipes?search=${encodeURIComponent(search)}`
    : "http://localhost:3100/recipes";
  const res = await fetch(url, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};
export const recipeDataByAuthor = async (userEmail) => {
  const res = await fetch(`http://localhost:3100/recipes/user/${userEmail}`, {
    method: "GET",
  });
  const fetchData = await res.json();
  return fetchData;
};
export const recipeSingleData = async (id) => {
  const res = await fetch(`http://localhost:3100/recipes/find/${id}`, {
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
  const res = await fetch(`http://localhost:3100/recipes/find/${id}`, {
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
  const res = await fetch("http://localhost:3100/recipehub/report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  });
  const data = res.json();

  return data;
};

export const getReport = async () => {
  const res = await fetch("http://localhost:3100/recipehub/report", {
    method: "GET",
  });
  const data = res.json();

  return data;
};

export const favoriteRecipe = async (userEmail) => {
  const res = await fetch(
    `http://localhost:3100/recipes/savedrecipe/${userEmail}`,
    {
      method: "GET",
    },
  );
  const data = await res.json();

  return data;
};

export const unsaveRecipe = async (id) => {
  const data = await fetch(`http://localhost:3100/recipes/savedrecipe/${id}`, {
    method: "DELETE",
  });

  console.log(id);

  return data;
};

export const totalUsers = async () => {
  const res = await fetch("http://localhost:3100/recipehub/users", {
    method: "GET",
  });
  const data = res.json();
  return data;
};
