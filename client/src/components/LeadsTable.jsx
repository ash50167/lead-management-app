import React from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const leadsData = [
  {
    name: "Acuity Infotech FZCO",
    code: "ACIN01",
    phone: "+91 99999 99991",
    country: "India",
  },
  {
    name: "ABC Infotech",
    code: "ABC1",
    phone: "+91 99999 99992",
    country: "India",
  },
  {
    name: "NEW Infotech",
    code: "NEW",
    phone: "+91 99999 99993",
    country: "India",
  },
  {
    name: "ABC Infotech 2",
    code: "ACIN02",
    phone: "+91 99999 99994",
    country: "India",
  },
  {
    name: "ABC Infotech 3",
    code: "ACIN03",
    phone: "+91 99999 99995",
    country: "India",
  },
  {
    name: "ABC Infotech 4",
    code: "ACIN04",
    phone: "+91 99999 99996",
    country: "India",
  },
  {
    name: "ABC Infotech 5",
    code: "ACIN05",
    phone: "+91 99999 99997",
    country: "India",
  },
];

const LeadsTable = () => {
  const navigate = useNavigate();

  const handleViewDetails = (leadCode) => {
    navigate(`/leads`);
  };

  const handleEditLead = (leadCode) => {
    console.log(`Edit lead with code: ${leadCode}`);
  };

  const handleDeleteLead = (leadCode) => {
    console.log(`Delete lead with code: ${leadCode}`);
  };

  const handleAddNewLead = () => {
    console.log("Add new lead");
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Leads</h2>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition flex items-center space-x-2"
            onClick={handleAddNewLead}
          >
            <FaPlus className="text-white" />
            <span>Add New Lead</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 rounded-lg">
            <thead>
              <tr className="text-left bg-gray-200">
                <th className="px-4 py-3 text-sm  font-medium text-gray-700">
                  Lead details
                </th>
                <th className="px-4 py-3 text-sm  font-medium text-gray-700">
                  Code
                </th>
                <th className="px-4 py-3 text-sm  font-medium text-gray-700">
                  Phone
                </th>
                <th className="px-4 py-3 text-sm  font-medium text-gray-700">
                  Country
                </th>
                <th className="px-4 py-3 text-sm text-center font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {leadsData.map((lead, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-3 flex items-center">
                    <img
                      src={`https://via.placeholder.com/40`}
                      alt={lead.name}
                      className="w-8 h-8 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">
                        {lead.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {lead.code.toLowerCase()}@company.com
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{lead.code}</td>
                  <td className="px-4 py-3 text-sm">{lead.phone}</td>
                  <td className="px-4 py-3 text-sm">{lead.country}</td>
                  <td className="px-4 py-3 flex space-x-2 justify-center">
                    <button
                      onClick={() => handleViewDetails(lead.code)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-sm"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEditLead(lead.code)}
                      className="bg-blue-100 text-blue-600 p-2 rounded-md hover:bg-blue-200 transition"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteLead(lead.code)}
                      className="bg-red-100 text-red-600 p-2 rounded-md hover:bg-red-200 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;
