import React, { createContext, useState, useContext, useEffect } from "react";

// Create Leads Context
const LeadsContext = createContext();

export const useLeads = () => useContext(LeadsContext);

export const LeadsProvider = ({ children }) => {
  const [selectedLead, setSelectedLead] = useState(null);

  // Load selected lead from localStorage when the app starts
  useEffect(() => {
    const savedLead = localStorage.getItem("selectedLead");
    if (savedLead) {
      setSelectedLead(JSON.parse(savedLead));
    }
  }, []);

  // Save selected lead to localStorage when it's updated
  useEffect(() => {
    if (selectedLead) {
      localStorage.setItem("selectedLead", JSON.stringify(selectedLead));
    }
  }, [selectedLead]);

  return (
    <LeadsContext.Provider value={{ selectedLead, setSelectedLead }}>
      {children}
    </LeadsContext.Provider>
  );
};
