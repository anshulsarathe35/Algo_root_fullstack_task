
import { useState } from "react";
import { updateTask, deleteTask } from "../api/taskApi";
import {Check, X} from "lucide-react"

const TaskItem = ({ task, updateTaskInList, removeTaskFromList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description,
    completed: task.completed,
  });


  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = async () => {
    try {
      const updatedData = await updateTask(task._id, updatedTask);
      updateTaskInList(updatedData); 
      setIsEditing(false); 
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    removeTaskFromList(task._id);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
            className="border p-2 w-full mb-2 rounded-lg"
            placeholder="Enter task title"
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
            className="border p-2 w-full mb-2 rounded-lg"
            placeholder="Enter task description"
          />
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={updatedTask.completed}
              onChange={(e) => setUpdatedTask({ ...updatedTask, completed: e.target.checked })}
              className="mr-2"
            />
            Mark as Completed
          </label>
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
          >
            Save
          </button>
          <button
            onClick={handleEditToggle}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      ) : (
        //this is for a edit view for delete and update description
        <div>
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>
          <p className={`mt-2 flex items-center gap-2 ${task.completed ? "text-green-600" : "text-red-600"}`}>
            {task.completed ? (
                <>
                <Check size={18} />
                <span>Completed</span>
                </>
            ) : (
                <>
                <X size={18} />
                <span>Not Completed</span>
                </>
  )}
</p>
          <div className="mt-4">
            <button
              onClick={handleEditToggle}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
