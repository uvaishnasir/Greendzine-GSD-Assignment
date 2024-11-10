import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  //handleLogout
  const handleLogout = () => {
    // Redirect the user to the login page
    window.location.href = "/";
  };
  return (
    <div className="dashboard-container">
      <h2>Overview</h2>
      <button onClick={handleLogout}>Logout</button>
      <div className="copyright">
        &copy; 2022 Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default Dashboard;
