import React from "react";

const QuickActions = () => {
  return (
    <>
      <div className="flex justify-end mt-6">
        <button className="bg-gray-600 text-white p-2 rounded-md mr-2">
          Download Report
        </button>
        <button className="bg-blue-600 text-white p-2 rounded-md">
          Generate Report
        </button>
      </div>
    </>
  );
};

export default QuickActions;
