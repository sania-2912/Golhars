import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={() => navigate("/upload")}>
        ➕ Upload New Painting
      </button>
    </div>
  );
};

export default Dashboard;
