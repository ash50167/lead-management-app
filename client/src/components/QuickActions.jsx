import React from "react";
import { FaDownload, FaFileAlt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  const handleViewLeads = () => {
    navigate("/leads");
  };

  return (
    <>
      <div className="flex justify-between mt-6">
        {/* Left side buttons */}
        <div className="flex">
          <button className="bg-gray-300 text-gray-800 p-2 rounded-md mr-2 flex items-center hover:bg-gray-400">
            <FaDownload className="mr-2" />
            Download Report
          </button>
          <button className="bg-blue-300 text-blue-800 p-2 rounded-md flex items-center hover:bg-blue-400">
            <FaFileAlt className="mr-2" />
            Generate Report
          </button>
        </div>

        {/* Right side button */}
        <button
          onClick={handleViewLeads}
          className="bg-green-300 text-green-800 p-2 rounded-md flex items-center hover:bg-green-400"
        >
          View Leads
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default QuickActions;
