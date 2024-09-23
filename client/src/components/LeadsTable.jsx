import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  FaUser,
  FaEnvelope,
  FaGlobe,
  FaUserTie,
  FaTag,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const leadsData = [
  {
    name: "John Doe",
    company: "ABC Corp",
    email: "john@example.com",
    phone: "(123) 456-7890",
    source: "Website",
    campaign: "Summer 2024 Promotion",
    assignedTo: "Jane Smith",
    department: "Sales",
    address: "123 Main St, Springfield, USA",
    leadStatus: "New",
    createdOn: "20th Sep 2024",
  },
  {
    name: "Emily Parker",
    company: "XYZ Ltd",
    email: "emily@example.com",
    phone: "(987) 654-3210",
    source: "Email",
    campaign: "Winter 2023 Campaign",
    assignedTo: "Mark Johnson",
    department: "Marketing",
    address: "456 Elm St, Brooklyn, USA",
    leadStatus: "In Progress",
    createdOn: "15th Sep 2024",
  },
  {
    name: "Robert Brown",
    company: "Tech Innovations",
    email: "robert@example.com",
    phone: "(555) 123-4567",
    source: "Referral",
    campaign: "Q3 2024 Outreach",
    assignedTo: "Laura White",
    department: "Customer Support",
    address: "789 Oak St, San Francisco, USA",
    leadStatus: "Follow-up Needed",
    createdOn: "10th Sep 2024",
  },
  {
    name: "Sophia Miller",
    company: "Finance Pros",
    email: "sophia@example.com",
    phone: "(321) 654-9870",
    source: "LinkedIn",
    campaign: "Financial Strategy 2024",
    assignedTo: "Daniel Thompson",
    department: "Finance",
    address: "741 Maple Ave, Chicago, USA",
    leadStatus: "Closed",
    createdOn: "5th Sep 2024",
  },
  {
    name: "David Clark",
    company: "Real Estate Group",
    email: "david@example.com",
    phone: "(432) 567-8901",
    source: "Referral",
    campaign: "Real Estate Expo 2024",
    assignedTo: "Eva Green",
    department: "Business Development",
    address: "852 Pine St, Los Angeles, USA",
    leadStatus: "In Progress",
    createdOn: "25th Aug 2024",
  },
  {
    name: "Jessica Lopez",
    company: "E-Commerce Inc",
    email: "jessica@example.com",
    phone: "(123) 987-6543",
    source: "Social Media",
    campaign: "Black Friday Deals 2024",
    assignedTo: "Michael Brown",
    department: "Sales",
    address: "963 Cedar St, Austin, USA",
    leadStatus: "New",
    createdOn: "10th Sep 2024",
  },
  {
    name: "Kevin Harris",
    company: "Health Solutions",
    email: "kevin@example.com",
    phone: "(555) 456-7890",
    source: "Conference",
    campaign: "Health Expo 2024",
    assignedTo: "Anna Lee",
    department: "Healthcare",
    address: "321 Willow St, Seattle, USA",
    leadStatus: "Follow-up Needed",
    createdOn: "18th Aug 2024",
  },
];

const LeadsTable = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;

  const totalPages = Math.ceil(leadsData.length / leadsPerPage);
  const currentLeads = leadsData.slice(
    (currentPage - 1) * leadsPerPage,
    currentPage * leadsPerPage
  );

  const handleViewDetails = (leadName) => {
    navigate(`/lead-details`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white p-2 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold px-6 mb-4">All Leads</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 rounded-lg">
            <thead>
              <tr className="text-left bg-gray-200">
                <th className="px-1 py-2 text-sm font-medium text-gray-700">
                  <FaUser className="inline-block mr-1 text-blue-600" /> Lead
                  Info
                </th>
                <th className="px-1 py-2 text-sm font-medium text-gray-700">
                  <FaEnvelope className="inline-block mr-1 text-red-600" />{" "}
                  Contact
                </th>
                <th className="px-1 py-2 text-sm font-medium text-gray-700">
                  <FaGlobe className="inline-block mr-1 text-green-600" />{" "}
                  Source & Campaign
                </th>
                <th className="px-1 py-2 text-sm font-medium text-gray-700">
                  <FaUserTie className="inline-block mr-1 text-purple-600" />{" "}
                  Assigned To
                </th>
                <th className="px-1 py-2 text-sm font-medium text-gray-700">
                  <FaMapMarkerAlt className="inline-block mr-1 text-yellow-600" />{" "}
                  Address
                </th>
                <th className="px-1 py-2 text-sm font-medium text-gray-700">
                  <FaTag className="inline-block mr-1 text-teal-600" /> Status
                </th>
                <th className="px-1 py-2 text-sm font-medium text-gray-700">
                  <FaCalendarAlt className="inline-block mr-1 text-indigo-600" />{" "}
                  Created
                </th>
                <th className="px-1 py-2 text-sm text-center font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentLeads.map((lead, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="px-1 py-2">
                    <p className="text-sm font-semibold text-gray-800">
                      {lead.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Company: {lead.company}
                    </p>
                  </td>
                  <td className="px-1 py-2">
                    <p className="text-xs text-gray-700">{lead.email}</p>
                    <p className="text-xs text-gray-700">{lead.phone}</p>
                  </td>
                  <td className="px-1 py-2">
                    <p className="text-xs text-gray-700">
                      Source: {lead.source}
                    </p>
                    <p className="text-xs text-gray-500">
                      Campaign: {lead.campaign}
                    </p>
                  </td>
                  <td className="px-1 py-2">
                    <p className="text-xs text-gray-700">
                      Assigned to: {lead.assignedTo}
                    </p>
                    <p className="text-xs text-gray-500">
                      Dept: {lead.department}
                    </p>
                  </td>
                  <td className="px-1 py-2">
                    <p className="text-xs text-gray-500">{lead.address}</p>
                  </td>
                  <td className="px-1 py-2">
                    <p className="text-xs font-semibold text-gray-800">
                      {lead.leadStatus}
                    </p>
                  </td>
                  <td className="px-1 py-2">
                    <p className="text-xs text-gray-500">{lead.createdOn}</p>
                  </td>
                  <td className="px-1 py-2 flex flex-col gap-3 items-center justify-center">
                    <button
                      onClick={() => handleViewDetails(lead.name)}
                      className="bg-purple-200 text-purple-800 w-full px-3 py-1 rounded hover:bg-purple-300 transition text-sm"
                    >
                      View
                    </button>
                    <div className="flex items-center gap-3 m-0">
                      <button
                        onClick={() => console.log(`Edit lead: ${lead.name}`)}
                        className="bg-yellow-100 text-yellow-600 p-2 rounded-md hover:bg-yellow-200 transition"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => console.log(`Delete lead: ${lead.name}`)}
                        className="bg-red-100 text-red-600 p-2 rounded-md hover:bg-red-200 transition"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-purple-300 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;
