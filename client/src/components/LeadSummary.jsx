import React from "react";

const LeadSummary = () => {
  const leads = [
    { label: "Total Leads", value: 108, color: "text-red-600", icon: "📊", bgColor: "bg-red-100" },
    { label: "New", value: 40, color: "text-blue-600", icon: "🟢", bgColor: "bg-blue-100" },
    { label: "Contacted", value: 30, color: "text-green-500", icon: "✅", bgColor: "bg-green-100" },
    { label: "Follow-Up", value: 20, color: "text-yellow-500", icon: "🔄", bgColor: "bg-yellow-100" },
    { label: "Flagged", value: 18, color: "text-orange-500", icon: "⚠️", bgColor: "bg-orange-100" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 p-4">
      {leads.map((lead, index) => (
        <div
          key={index}
          className={`shadow-lg rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200 hover:shadow-2xl hover:border-blue-500 hover:scale-105 transform transition-all duration-300 ease-in-out ${lead.bgColor}`}
        >
          <span className={`text-3xl font-bold ${lead.color}`}>
            {lead.value}
          </span>
          <span className="text-gray-600 mt-2 flex items-center text-sm">
            <span className="mr-2">{lead.icon}</span>
            {lead.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LeadSummary;
