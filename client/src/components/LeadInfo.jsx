import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaGlobe,
  FaUserTie,
  FaCalendarAlt,
  FaTag,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useLeads } from "../contexts/LeadsContext";

const LeadInfo = () => {
  const { selectedLead } = useLeads();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [leadStatus, setLeadStatus] = useState("");

  // Set lead status once the selectedLead is available
  useEffect(() => {
    if (selectedLead) {
      setLeadStatus(selectedLead.leadStatus);
    }
  }, [selectedLead]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleStatusChange = (status) => {
    setLeadStatus(status);
    setIsDropdownOpen(false);
  };

  // Return early if selectedLead is null or undefined
  if (!selectedLead) {
    return <div className="bg-white rounded-md mb-4 p-6 text-center text-gray-600">No lead selected.</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Lead Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Full Height Card: Lead Name and Company */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:bg-blue-200 transition-all duration-300 flex items-center col-span-2 md:col-span-1 md:row-span-2">
          <FaUser className="text-blue-500 mr-4 text-xl" />
          <div>
            <p className="text-lg font-semibold text-gray-700">
              Lead: {selectedLead.name}
            </p>
            <p className="text-sm text-gray-500">
              Company: {selectedLead.company}
            </p>
          </div>
        </div>

        {/* Half Height Card: Contact and Phone */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md hover:bg-red-200 transition-all duration-300 flex items-center">
          <FaEnvelope className="text-red-500 mr-4 text-xl" />
          <div>
            <p className="text-lg font-semibold text-gray-700">
              Contact: {selectedLead.email}
            </p>
            <p className="text-sm text-gray-500">Phone: {selectedLead.phone}</p>
          </div>
        </div>

        {/* Half Height Card: Source and Campaign */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md hover:bg-green-200 transition-all duration-300 flex items-center">
          <FaGlobe className="text-green-500 mr-4 text-xl" />
          <div>
            <p className="text-lg font-semibold text-gray-700">
              Source: {selectedLead.source}
            </p>
            <p className="text-sm text-gray-500">
              Campaign: {selectedLead.campaign}
            </p>
          </div>
        </div>

        {/* Assigned to Card - Full Width */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:bg-purple-200 transition-all duration-300 flex items-center col-span-2 md:col-span-2">
          <FaUserTie className="text-purple-500 mr-4 text-xl" />
          <div>
            <p className="text-lg font-semibold text-gray-700">
              Assigned to: {selectedLead.assignedTo}
            </p>
            <p className="text-sm text-gray-500">
              Department: {selectedLead.department}
            </p>
          </div>
        </div>

        {/* Full Height Card: Address */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:bg-yellow-200 transition-all duration-300 flex items-center col-span-2 md:col-span-1 md:row-span-2">
          <FaMapMarkerAlt className="text-yellow-500 mr-4 text-xl" />
          <div>
            <p className="text-lg font-semibold text-gray-700">Address:</p>
            <p className="text-sm text-gray-500">{selectedLead.address}</p>
          </div>
        </div>

        {/* Lead Status with Dropdown */}
        <div className="bg-teal-100 p-6 rounded-lg shadow-md hover:bg-teal-200 transition-all duration-300 flex items-center relative">
          <FaTag className="text-teal-500 mr-4 text-xl" />
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-700">
              Lead Status: {leadStatus}
            </p>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleDropdown}
            >
              <p className="text-sm text-gray-500">Change Status</p>
              {isDropdownOpen ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleStatusChange("New")}
                  >
                    New
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleStatusChange("In Progress")}
                  >
                    In Progress
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleStatusChange("Follow-up Needed")}
                  >
                    Follow-up Needed
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleStatusChange("Closed")}
                  >
                    Closed
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Created on Card */}
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:bg-indigo-200 transition-all duration-300 flex items-center">
          <FaCalendarAlt className="text-indigo-500 mr-4 text-xl" />
          <div>
            <p className="text-lg font-semibold text-gray-700">
              Created on: {selectedLead.createdOn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadInfo;
