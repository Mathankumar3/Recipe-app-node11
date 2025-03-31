import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
} from "../Controllers/recipe.controller.js";

const router = express.Router();

router.post("/create-recipe", createRecipe);
router.get("/get-recdetails", getAllRecipes);
router.get("/get-RecipeById/:id", getRecipeById);
router.put("/update-recipe/:id", updateRecipe);
router.delete("/delete-Recipe/:id", deleteRecipe);

export default router;
