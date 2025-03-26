import React, { useState } from "react";
import { createTask } from "../api/taskApi.js";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      await createTask({ title });
      setTitle("");
      fetchTasks();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-5">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
