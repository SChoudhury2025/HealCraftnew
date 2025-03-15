import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SubBranches from "../pages/SubBranches";
import Dashboard from '../pages/admin/Dashboard.tsx';  // ✅ Capitalized component name
import Home from '../pages/home/Home.tsx';
import Main from '../pages/login/Main.tsx'


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Main/>} />
        <Route path="/dashboard" element={<Dashboard />} />  {/* ✅ Fixed: Using capitalized Dashboard */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
