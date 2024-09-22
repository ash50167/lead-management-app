import "../public/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SideBar from "./components/SideBar";
// import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Leaddetail from "./pages/Leaddetail";
import { RoleProvider } from "./contexts/RoleContext";

function App() {
  return (
    <>
      <RoleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leaddetail />} />
          </Routes>
        </BrowserRouter>
      </RoleProvider>
    </>
  );
}

export default App;
