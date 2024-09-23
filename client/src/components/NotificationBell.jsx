import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState(false);

  // Function to simulate new notifications (tasks, reminders, deadlines)
  const simulateNotification = () => {
    const notificationTypes = [
      "New task added: Follow-up with client",
      "Reminder: Meeting with the marketing team",
      "Deadline approaching: Submit project report",
      "New task: Update the sales presentation",
    ];
    const randomNotification =
      notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
    setNotifications((prev) => [...prev, randomNotification]);
    setNewNotification(true);
  };

  // Simulate receiving a notification every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      simulateNotification();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle clearing notifications
  const handleClearNotifications = () => {
    setNotifications([]);
    setNewNotification(false);
  };

  return (
    <div className="relative">
      <button className="relative text-gray-400">
        <FaBell className="text-2xl" />
        {newNotification && (
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
        )}
      </button>

      {notifications.length > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-20">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-gray-800 font-semibold">Notifications</h4>
            <button
              className="text-sm text-blue-600"
              onClick={handleClearNotifications}
            >
              Clear All
            </button>
          </div>
          <ul>
            {notifications.map((notification, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 py-1 border-b last:border-none"
              >
                {notification}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
