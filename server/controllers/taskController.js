import Task from "../models/taskModel.js";

const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
};

//checking for dev - done 
const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    res.status(400).json({ message: "Task title is required" });
  }

  const task = await Task.create({
    title,
    description,
  });

  res.status(201).json(task);
};

//for dev - done 
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.completed = req.body.completed ?? task.completed;

  const updatedTask = await task.save();
  res.status(200).json(updatedTask);
};

//for dev- done
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  await task.deleteOne();
  res.status(200).json({ message: "Task removed" });
};

export { getTasks, createTask, updateTask, deleteTask };
