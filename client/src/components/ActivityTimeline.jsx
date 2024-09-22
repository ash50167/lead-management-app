import React from "react";
import { FaEnvelope, FaPhoneAlt, FaRegClock, FaCheckCircle } from "react-icons/fa";

const ActivityTimeline = () => {
  const activities = [
    { icon: <FaEnvelope />, text: "Contacted via email", time: "2 days ago" },
    { icon: <FaPhoneAlt />, text: "Phone call scheduled", time: "Yesterday" },
    { icon: <FaRegClock />, text: "Follow-up meeting", time: "Today" },
    { icon: <FaCheckCircle />, text: "Lead converted", time: "Just now" },
  ];

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Activity Timeline</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="relative flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-lg"></div>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full shadow-lg mr-4">
              <div className="text-blue-500 text-xl">{activity.icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-700">{activity.text}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityTimeline;
