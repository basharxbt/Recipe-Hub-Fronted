export const recipeData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/recipes`, {
    method: "GET",
  });
  const fetchData = await res.json();
  return fetchData;
};
export const searchRecipe = async (searchParams) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipes?${searchParams}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return await res.json();
};
export const recipeDataByAuthor = async (userEmail) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipes/user/${userEmail}`,
    {
      method: "GET",
    },
  );
  const fetchData = await res.json();
  return fetchData;
};
export const recipeSingleData = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipes/find/${id}`,
    {
      method: "GET",
    },
  );
  const data = await res.json();
  return data;
};
export const reportedRecipeCollection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/reported-recipe/data`,
    {
      method: "GET",
    },
  );
  const data = await res.json();
  return data;
};

export const addRecipeData = async (recipe) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/recipes`, {
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipes/find/${id}`,
    {
      method: "PATCH",
    },
  );
  const data = await res.json();
  return data;
};

export const savedRecipe = async (token, recipe) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipes/savedrecipe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(recipe),
    },
  );
  const data = res.json();
  return data;
};

export const reportSend = async (token, report) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipehub/report`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(report),
    },
  );
  const data = res.json();

  return data;
};

export const getReport = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipehub/report`,
    {
      method: "GET",
    },
  );
  const data = res.json();

  return data;
};

export const favoriteRecipe = async (userEmail, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipes/savedrecipe/${userEmail}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();

  return data;
};

export const unsaveRecipe = async (id) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipes/savedrecipe/${id}`,
    {
      method: "DELETE",
    },
  );

  console.log(id);

  return data;
};

export const totalUsers = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipehub/users`,
    {
      method: "GET",
    },
  );
  const data = res.json();
  return data;
};

export const reportedRecipeDismiss = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/reported-recipe/data/${id}`,
    {
      method: "DELETE",
    },
  );
  const data = res.json;
  return data;
};
export const reportedRecipeDelete = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/reported-recipe/data-delete/${id}`,
    {
      method: "DELETE",
    },
  );
  const data = res.json;
  return data;
};

export const recentCreatedRecipes = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recent/recipes/${email}`,
    {
      method: "GET",
    },
  );
  const data = res.json();
  return data;
};
export const transactions = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/premium/transaction`,
    {
      method: "GET",
    },
  );
  const data = res.json();
  return data;
};
export const recipeFeatureUpdate = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/recipe/manage/${id}`,
    {
      method: "PATCH",
    },
  );
  const data = res.json();
  return data;
};
export const userBlock = async (id, newStatus) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/users/role/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newStatus }),
    },
  );
  const data = await res.json();
  return data;
};

export const myPurchasedRecipes = async (userEmail) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/purchased/recipes/${userEmail}`,
    {
      method: "GET",
    },
  );
  const data = await res.json();
  return data;
};
