import React from "react";
import "../styles/Dashboard.css";
import dashboard from "../assets/Artboard-icons/home 2.png";
import trans from "../assets/Artboard-icons/transfer 1.png";
import account from "../assets/Artboard-icons/user 3 1.png";
import invest from "../assets/Artboard-icons/economic-investment 1.png";
import cards from "../assets/Artboard-icons/credit-card 1.png";
import loans from "../assets/Artboard-icons/loan 1.png";
import services from "../assets/Artboard-icons/service 1.png";
import privileges from "../assets/Artboard-icons/econometrics 1.png";
import setting from "../assets/Artboard-icons/settings solid 1.png";
import dashLogo from "../assets/Artboard-icons/iconfinder_vector_65_09_473792 1.png";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-title">
          <img src={dashLogo} alt="Loans Icon" className="menu-icon" />
          BankDash.
        </div>
        <ul className="sidebar-menu">
          <li className="dashboard">
            <img src={dashboard} alt="Dashboard Icon" className="menu-icon" />
            Dashboard
          </li>
          <li>
            <img src={trans} alt="Transactions Icon" className="menu-icon" />
            Transactions
          </li>
          <li>
            <img src={account} alt="Accounts Icon" className="menu-icon" />
            Accounts
          </li>
          <li>
            <img src={invest} alt="Investments Icon" className="menu-icon" />
            Investments
          </li>
          <li>
            <img src={cards} alt="Credit Cards Icon" className="menu-icon" />
            Credit Cards
          </li>
          <li>
            <img src={loans} alt="Loans Icon" className="menu-icon" />
            Loans
          </li>
          <li>
            <img src={services} alt="Services Icon" className="menu-icon" />
            Services
          </li>
          <li>
            <img
              src={privileges}
              alt="My Privileges Icon"
              className="menu-icon"
            />
            My Privileges
          </li>
          <li>
            <img src={setting} alt="Settings Icon" className="menu-icon" />
            Setting
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header"></header>

        {/* Content Section */}
      </div>
    </div>
  );
};

export default Dashboard;
