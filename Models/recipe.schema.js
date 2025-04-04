import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  // createdAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model("recipes", RecipeSchema);
export default Recipe;
