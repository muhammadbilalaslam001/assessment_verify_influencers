import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import your page components
import AdminPanel from "./pages/admin-panel";
import LeaderBoard from "./pages/leader-board";
import Influencer from "./pages/influencer";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin-panel" />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/leader-board" element={<LeaderBoard />} />
      <Route path="/influencer" element={<Influencer/>}/>
    </Routes>
  );
};

export default AppRoutes;
