import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/tasks").get(getTasks).post(createTask);
router.route("/tasks/:id").put(updateTask).delete(deleteTask);

export default router;
