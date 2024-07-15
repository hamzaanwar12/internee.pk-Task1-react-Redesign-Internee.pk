import React, { useState } from 'react';
import './NavBar.css'; 

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Pakistan Virtual Internship Platform</div>
      <div className="navbar-menu">
        <div className="navbar-item">
          <img
            src="https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
            alt="Profile"
            className="profile-image"
          />
          <span className="profile-name">Muhammad Hamza</span>
          <div className="profile-info" onClick={handleDropdownToggle}>
            
            <span className="arrow">&#9662;</span>
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Manage Account</div>
              
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
