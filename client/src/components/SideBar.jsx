import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa"; // Importing icons for Settings and Logout
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation(); // Get current location for active state

  return (
    <aside
      className={`bg-gradient-to-b from-blue-600 to-green-400 h-screen transition-all ${
        isOpen ? "w-48" : "w-12"
      } duration-300`}
    >
      <div className="flex justify-between items-center p-4">
        <h1
          className={`${
            isOpen ? "block" : "hidden"
          } text-white font-bold text-xl`}
        >
          Identify Leads
        </h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <FaBars />
        </button>
      </div>

      <nav className="p-2 text-white flex flex-col gap-2">
        {/* Dashboard */}
        <SidebarItem
          icon={<FaHome />}
          label="Overview"
          to="/"
          isOpen={isOpen}
          isActive={location.pathname === "/"}
        />
        {/* Leads */}
        <SidebarItem
          icon={<FaUser />}
          label="Leads"
          to="/leads"
          isOpen={isOpen}
          isActive={location.pathname === "/leads"}
        />
        {/* Settings */}
        <SidebarItem
          icon={<FaCog />}
          label="Settings"
          to="/"
          isOpen={isOpen}
          isActive={location.pathname === "/settings"}
        />
        {/* Logout */}
        <SidebarItem
          icon={<FaSignOutAlt />}
          label="Logout"
          to="/"
          isOpen={isOpen}
          isActive={false} // Logout should not have an active state
        />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label, to, isOpen, isActive, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={`flex items-center justify-center space-x-2 py-2 hover:bg-blue-700 rounded-lg transition-all ${
      isActive ? "bg-blue-700" : ""
    }`}
  >
    {icon}
    <span className={`${isOpen ? "block" : "hidden"} text-white`}>{label}</span>
  </NavLink>
);

export default Sidebar;
