// src/App.jsx
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { getTasks } from "./api/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Task Manager</h1>
        <AddTask refreshTasks={fetchTasks} />
        <div className="mt-6">
          <TaskList tasks={tasks} refreshTasks={fetchTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
