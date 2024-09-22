import React, { useState } from "react";
import { useRole } from "../contexts/RoleContext";
import {
  FaUser,
  FaCog,
  FaChevronDown,
  FaChevronUp,
  FaChevronRight,
} from "react-icons/fa";

const RoleMenu = () => {
  const { role, setRole } = useRole("Manager");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const getMenuItems = () => {
    if (role === "Manager") {
      return [
        {
          label: "Team Overview",
          route: "/",
          icon: <FaUser />,
          bgColor: "bg-blue-100",
        },
        {
          label: "Settings",
          route: "/",
          icon: <FaCog />,
          bgColor: "bg-green-100",
        },
      ];
    } else if (role === "Rep") {
      return [
        {
          label: "My Leads",
          route: "/",
          icon: <FaUser />,
          bgColor: "bg-purple-100",
        },
      ];
    } else if (role === "Admin") {
      return [
        {
          label: "Admin Settings",
          route: "/",
          icon: <FaCog />,
          bgColor: "bg-red-100",
        },
        {
          label: "User Management",
          route: "/",
          icon: <FaUser />,
          bgColor: "bg-yellow-100",
        },
      ];
    }
    return [];
  };

  const menuItems = getMenuItems();

  return (
    <div className="bg-white flex items-center justify-between p-4 rounded-lg shadow-md">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md"
        >
          <span>{role}</span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isOpen && (
          <ul className="absolute mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-20">
            {["Manager", "Rep", "Admin"].map((role) => (
              <li
                key={role}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setRole(role);
                  setIsOpen(false);
                }}
              >
                {role}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            className={`flex items-center justify-between p-2 rounded-md shadow hover:bg-opacity-75 transition-all cursor-pointer ${item.bgColor}`}
            style={{ width: "160px" }}
          >
            <div className="flex items-center space-x-2">
              {item.icon}
              <span className="font-medium text-sm">{item.label}</span>
            </div>
            <FaChevronRight className="text-gray-600" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default RoleMenu;
