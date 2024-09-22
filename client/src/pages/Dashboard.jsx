import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import RoleManage from "../components/RoleManage";
import LeadSummary from "../components/LeadSummary";
import StatusGraphs from "../components/StatusGraphs";
import TaskList from "../components/TaskList";
import QuickActions from "../components/QuickActions";
import { useRole } from "../contexts/RoleContext";
import LeadsTable from "../components/LeadsTable";

const Dashboard = () => {
  const { role } = useRole();

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="dashboard flex-1 flex flex-col gap-4 p-6 pb-12 bg-gray-100 min-h-screen overflow-y-auto">
          <NavBar />
          <RoleManage />
          <LeadSummary />
          <StatusGraphs />
          <TaskList selectedRole={role} />
          <LeadsTable />
          <QuickActions />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
