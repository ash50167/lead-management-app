import React from "react";
import { FaPhoneAlt, FaEnvelope, FaRegStickyNote } from "react-icons/fa";

const LeadHistory = () => {
  const historyItems = [
    {
      icon: <FaPhoneAlt className="text-green-500" />,
      text: "Phone call with Jane Smith",
      time: "2 days ago",
    },
    {
      icon: <FaEnvelope className="text-blue-500" />,
      text: "Email sent to john@example.com",
      time: "1 week ago",
    },
    {
      icon: <FaRegStickyNote className="text-yellow-500" />,
      text: "Note: Follow-up scheduled for next week",
      time: "1 week ago",
    },
    {
      icon: <FaPhoneAlt className="text-green-500" />,
      text: "Follow-up call with client",
      time: "3 weeks ago",
    },
    {
      icon: <FaEnvelope className="text-blue-500" />,
      text: "Response received from client",
      time: "1 month ago",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Lead History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                Interaction
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {historyItems.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-all duration-300"
              >
                <td className="py-4 px-4 border-b border-gray-200 flex items-center">
                  <div className="mr-2 text-xl">{item.icon}</div>
                  <span className="text-gray-700">{item.text}</span>
                </td>
                <td className="py-4 px-4 border-b border-gray-200 text-gray-500">
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadHistory;
