import Recipe from "../Models/recipe.schema.js";

//create recipe
export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    // console.log(newRecipe);
    await newRecipe.save();
    res
      .status(200)
      .json({ message: "Recipe Added Successfully", data: newRecipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Retrieve all recipes from the database.
export const getAllRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.find();
    res.status(200).json({ data: recipe });
  } catch (error) {
    console.log(error);
  }
};

// Find a single Recipe by id
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//updateRecipe
export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
