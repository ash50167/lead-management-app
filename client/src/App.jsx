import "../public/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoleProvider } from "./contexts/RoleContext";
import { LeadsProvider } from "./contexts/LeadsContext";
import Dashboard from "./pages/Dashboard";
import Leaddetail from "./pages/Leaddetail";
import Leads from "./pages/Leads";

function App() {
  return (
    <>
      <RoleProvider>
        <LeadsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/lead-details" element={<Leaddetail />} />
            </Routes>
          </BrowserRouter>
        </LeadsProvider>
      </RoleProvider>
    </>
  );
}

export default App;
