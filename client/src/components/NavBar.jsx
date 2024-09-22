import React, { useState } from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";

// Notification Bell Component
const NotificationBell = () => (
  <button className="relative">
    <FaBell className="text-gray-600 text-xl" />
    <span className="absolute bottom-3 left-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 text-center">
      3
    </span>
  </button>
);

// Search Bar Component
const SearchBar = () => (
  <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      className="bg-gray-100 rounded-md pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
    />
    <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
  </div>
);

// Profile Photo with Gradient Circle
const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="relative w-12 h-12 cursor-pointer" onClick={handleProfileClick}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
          <img
            src="/assets/profile.svg"
            alt="User"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-full p-6 relative w-56 h-56 flex items-center justify-center shadow-lg">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={handleCloseModal}
            >
              ✖
            </button>
            <FaUser className="text-black text-3xl" />
            <img
              src="/assets/profile.svg"
              alt="User"
              className="rounded-full w-44 h-44 object-cover absolute"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Navbar Component
const Navbar = () => (
  <header className="bg-white shadow p-4 mb-4 rounded-lg">
    <div className="flex justify-between items-center">
      <div className="text-xl font-semibold">Dashboard Overview</div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <NotificationBell />
        <UserProfile />
      </div>
    </div>
  </header>
);

export default Navbar;
