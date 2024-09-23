import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const TaskList = ({ selectedRole }) => {
  const initialTasks = [
    {
      role: "Manager",
      tasks: [
        {
          name: "Review Team Performance",
          deadline: "2024-09-25",
          status: "Pending",
        },
        {
          name: "Set Goals for Next Quarter",
          deadline: "2024-09-30",
          status: "In Progress",
        },
      ],
    },
    {
      role: "Rep",
      tasks: [
        { name: "Follow-up Call", deadline: "2024-09-26", status: "Completed" },
        { name: "Send Proposal", deadline: "2024-09-30", status: "Pending" },
        { name: "Review Leads", deadline: "2024-10-01", status: "In Progress" },
      ],
    },
    {
      role: "Admin",
      tasks: [
        {
          name: "Update User Permissions",
          deadline: "2024-09-27",
          status: "Pending",
        },
        {
          name: "Conduct System Audit",
          deadline: "2024-09-29",
          status: "In Progress",
        },
      ],
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTask, setNewTask] = useState({
    name: "",
    deadline: "",
    status: "Pending",
    role: selectedRole,
  });

  const handleStatusChange = (roleIndex, taskIndex, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[roleIndex].tasks[taskIndex].status = newStatus;
    setTasks(updatedTasks);
  };

  const filteredTasks =
    tasks.find((taskGroup) => taskGroup.role === selectedRole)?.tasks || [];

  const handleAddTask = () => {
    if (!newTask.name || !newTask.deadline) {
      return;
    }
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((group) => {
        if (group.role === newTask.role) {
          return {
            ...group,
            tasks: [...group.tasks, { ...newTask }],
          };
        }
        return group;
      });

      console.log("Updated Tasks:", updatedTasks);
      return updatedTasks;
    });

    resetTaskForm();
  };

  const handleUpdateTask = () => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const roleIndex = updatedTasks.findIndex(
        (group) => group.role === newTask.role
      );
      updatedTasks[roleIndex].tasks[editingIndex] = { ...newTask };
      return updatedTasks;
    });
    resetTaskForm();
  };

  const handleEditTask = (roleIndex, taskIndex) => {
    const taskToEdit = tasks[roleIndex].tasks[taskIndex];
    setNewTask(taskToEdit);
    setEditingIndex(taskIndex);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const resetTaskForm = () => {
    setNewTask({
      name: "",
      deadline: "",
      status: "Pending",
      role: selectedRole,
    });
    setIsModalOpen(false);
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleDeleteTask = (roleIndex, taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[roleIndex].tasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Tasks for {selectedRole}</h3>
        <button
          onClick={() => {
            resetTaskForm();
            setIsModalOpen(true);
          }}
          className="flex items-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          <FaPlus className="mr-2" />
          Add Task
        </button>
      </div>
      <ul className="space-y-3">
        {filteredTasks.map((task, taskIndex) => {
          const isOpen = openDropdownIndex === taskIndex;

          return (
            <li
              key={taskIndex}
              className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition-all duration-300"
            >
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium">{task.name}</span>
                  <span
                    className={`ml-2 text-xs font-semibold px-2 py-1 rounded ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : task.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
                <span className="ml-2 text-gray-500 text-sm">
                  {task.deadline}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select
                    value={task.status}
                    onChange={(e) =>
                      handleStatusChange(
                        tasks.findIndex((group) => group.role === selectedRole),
                        taskIndex,
                        e.target.value
                      )
                    }
                    className="text-sm bg-white border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 w-32"
                    onClick={() =>
                      setOpenDropdownIndex(isOpen ? null : taskIndex)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <button
                  onClick={() =>
                    handleEditTask(
                      tasks.findIndex((group) => group.role === selectedRole),
                      taskIndex
                    )
                  }
                  className="bg-yellow-100 text-yellow-600 p-2 rounded-md hover:bg-yellow-200 transition"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() =>
                    handleDeleteTask(
                      tasks.findIndex((group) => group.role === selectedRole),
                      taskIndex
                    )
                  }
                  className="bg-red-100 text-red-600 p-2 rounded-md hover:bg-red-200 transition"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Modal for adding or editing new task */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">
              {isEditing ? "Edit Task" : "Add New Task"}
            </h3>
            <div className="mb-4">
              <label className="block mb-1">Task Name</label>
              <input
                type="text"
                value={newTask.name}
                onChange={(e) =>
                  setNewTask({ ...newTask, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-2 py-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Deadline</label>
              <input
                type="date"
                value={newTask.deadline}
                onChange={(e) =>
                  setNewTask({ ...newTask, deadline: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-2 py-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Role</label>
              <select
                value={newTask.role}
                onChange={(e) =>
                  setNewTask({ ...newTask, role: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-2 py-1"
              >
                <option value="Manager">Manager</option>
                <option value="Rep">Rep</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Status</label>
              <select
                value={newTask.status}
                onChange={(e) =>
                  setNewTask({ ...newTask, status: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-2 py-1"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={isEditing ? handleUpdateTask : handleAddTask}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition mr-2"
              >
                {isEditing ? "Update" : "Save"}
              </button>
              <button
                onClick={resetTaskForm}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
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

export default TaskList;
