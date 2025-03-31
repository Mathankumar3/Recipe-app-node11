# Recipe-app-node


## Description
A simple CRUD API for managing recipes using Node.js, Express.js, and MongoDB (Mongoose).

## Installation
npm install express nodemon mongoose dotenv
```

## Running the Server
npm run dev
```

## API Endpoints

  post("/create-recipe", createRecipe);-Create a new recipe
  get("/get-recdetails", getAllRecipes);-Retrieve all recipes
  get("/get-RecipeById/:id", getRecipeById);-Retrieve a recipe by ID
  put("/update-recipe/:id", updateRecipe);-Update a recipe by ID
  delete("/delete-Recipe/:id", deleteRecipe);-Delete a recipe by ID

## Environment Variables
Create a `.env` file and add:
```
MONGO_URI=your_mongodb_connection_string
PORT=5001
