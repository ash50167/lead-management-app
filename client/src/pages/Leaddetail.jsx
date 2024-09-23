import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import LeadInfo from "../components/LeadInfo";
import ActivityTimeline from "../components/ActivityTimeline";
import LeadHistory from "../components/LeadsHistory";
import LeadAttachment from "../components/LeadAttachment";
import LeadTask from "../components/LeadTask";

const Leaddetail = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="lead-detail max-h-screen overflow-y-auto bg-gray-100 p-6">
          <NavBar/>
          <LeadInfo />
          <ActivityTimeline />
          <LeadHistory />
          <LeadTask />
          <LeadAttachment />
        </div>
      </div>
    </>
  );
};

export default Leaddetail;
