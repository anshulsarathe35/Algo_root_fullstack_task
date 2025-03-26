
import { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  const updateTaskInList = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };
  const removeTaskFromList = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          updateTaskInList={updateTaskInList}
          removeTaskFromList={removeTaskFromList}
        />
      ))}
    </div>
  );
};

export default TaskList;
