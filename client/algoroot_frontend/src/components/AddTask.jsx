
import { useState } from "react";
import { createTask } from "../api/taskApi";

const AddTask = ({ refreshTasks }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleCreate = async () => {
    if (!newTask.title.trim()) {
      alert("Task title is required!");
      return;
    }
    await createTask(newTask);
    setNewTask({ title: "", description: "", completed: false });
    refreshTasks(); 
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-50 mb-4">
      <input
        type="text"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className="border p-2 w-full mb-2 rounded-lg"
        placeholder="Enter task title"
      />
      <textarea
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        className="border p-2 w-full mb-2 rounded-lg"
        placeholder="Enter task description"
      />
      <button
        onClick={handleCreate}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
