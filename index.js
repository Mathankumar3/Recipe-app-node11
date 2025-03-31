import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import recRouter from "./Routers/recipe.router.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

connectDB();

app.use("/api", recRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port`);
});
