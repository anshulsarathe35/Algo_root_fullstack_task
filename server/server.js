import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();


// Allow requests from frontend
// const allowedOrigins = ["http://localhost:5173", "https://algo-root-fullstack-task-5.onrender.com"];

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

//added as described in the task document
app.use("/api", taskRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
