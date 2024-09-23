import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import LeadsTable from "../components/LeadsTable";

const Leads = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="leads max-h-screen overflow-y-auto bg-gray-100 p-6">
          <NavBar />
          <LeadsTable />
        </div>
      </div>
    </>
  );
};

export default Leads;
