import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Data representing leads by month
const data = [
  { name: "January", leads: 300, activeLeads: 200, completedLeads: 100 },
  { name: "February", leads: 280, activeLeads: 180, completedLeads: 100 },
  { name: "March", leads: 350, activeLeads: 250, completedLeads: 100 },
  { name: "April", leads: 320, activeLeads: 220, completedLeads: 100 },
  { name: "May", leads: 400, activeLeads: 300, completedLeads: 100 },
  { name: "June", leads: 370, activeLeads: 270, completedLeads: 100 },
  { name: "July", leads: 420, activeLeads: 320, completedLeads: 100 },
  { name: "August", leads: 410, activeLeads: 310, completedLeads: 100 },
  { name: "September", leads: 360, activeLeads: 260, completedLeads: 100 },
  { name: "October", leads: 390, activeLeads: 290, completedLeads: 100 },
  { name: "November", leads: 430, activeLeads: 330, completedLeads: 100 },
  { name: "December", leads: 450, activeLeads: 350, completedLeads: 100 },
];

const StatusGraphs = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Monthly Lead Activity</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Bar for total leads with matching color */}
          <Bar dataKey="leads" fill="#6B5B95" name="Total Leads" />{" "}
          {/* Deep purple */}
          {/* Bar for active leads with matching color */}
          <Bar dataKey="activeLeads" fill="#F7CAC9" name="Active Leads" />{" "}
          {/* Light pink */}
          {/* Bar for completed leads with matching color */}
          <Bar
            dataKey="completedLeads"
            fill="#92A8D1"
            name="Completed Leads"
          />{" "}
          {/* Light blue */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusGraphs;
