import React from "react";

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <div className="navbar">
      <div
        className={activeTab === "all" ? "active-tab" : "nav-tab"}
        onClick={() => onTabChange("all")}
      >
        All
      </div>
      <div
        className={activeTab === "active" ? "active-tab" : "nav-tab"}
        onClick={() => onTabChange("active")}
      >
        Active
      </div>
      <div
        className={activeTab === "completed" ? "active-tab" : "nav-tab"}
        onClick={() => onTabChange("completed")}
      >
        Completed
      </div>
    </div>
  );
};

export default Navbar;
