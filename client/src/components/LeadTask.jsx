import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const statusStyles = {
  New: "bg-green-100 text-green-600",
  "In Progress": "bg-yellow-100 text-yellow-600",
  Completed: "bg-blue-100 text-blue-600",
  "Follow-up Needed": "bg-red-100 text-red-600",
};

const TasksReminders = ({ leadName }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Follow up with client",
      dueDate: "2024-09-30",
      status: "New",
    },
    {
      id: 2,
      text: "Prepare presentation for the meeting",
      dueDate: "2024-10-05",
      status: "In Progress",
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [newStatus, setNewStatus] = useState("New");
  const [editTaskId, setEditTaskId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    if (showModal) {
      clearForm();
    }
  };

  const clearForm = () => {
    setNewTask("");
    setNewDueDate("");
    setNewStatus("New");
    setEditTaskId(null);
  };

  const handleAddEditTask = () => {
    if (newTask) {
      if (editTaskId) {
        // Edit task
        setTasks(
          tasks.map((task) =>
            task.id === editTaskId
              ? {
                  ...task,
                  text: newTask,
                  dueDate: newDueDate,
                  status: newStatus,
                }
              : task
          )
        );
      } else {
        // Add new task
        setTasks([
          ...tasks,
          {
            id: Date.now(),
            text: newTask,
            dueDate: newDueDate,
            status: newStatus,
          },
        ]);
      }
      toggleModal();
    }
  };

  const openEditModal = (task) => {
    setNewTask(task.text);
    setNewDueDate(task.dueDate);
    setNewStatus(task.status);
    setEditTaskId(task.id);
    toggleModal();
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Tasks & Reminders
        </h2>
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center"
        >
          <FaPlus className="mr-2" /> Add Task
        </button>
      </div>

      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-gray-700">
                  {task.text}
                </p>
                <div
                  className={`px-2 py-1 rounded-full ${
                    statusStyles[task.status]
                  }`}
                >
                  {task.status}
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Due: {task.dueDate || "No due date"}
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => openEditModal(task)}
                className="text-yellow-500 hover:text-yellow-600 mr-2"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-600"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Adding/Editing Task */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">
              {editTaskId ? "Edit Task" : "Add Task"}
            </h3>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Task description"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              required
            />
            <input
              type="date"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            >
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Follow-up Needed">Follow-up Needed</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleAddEditTask}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all duration-300"
              >
                {editTaskId ? "Update Task" : "Add Task"}
              </button>
              <button
                onClick={toggleModal}
                className="ml-2 text-gray-500 hover:text-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksReminders;
