import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import Logo from "../assets/LOGO FINAL PNG (1).png";

function Navbar() {
  const [click, setClick] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
    setClick(false); // Close the entire navbar when a link is clicked
  };

  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(false); // Close the dropdown when clicking on other menu items
  };

  return (
    <div>
      <div
        className={click ? "main-container" : ""}
        onClick={() => {
          setClick(false);
          setDropdownVisible(false);
        }}
      />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img className="logo" src={Logo} alt="Logo" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/industries"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                  onClick={handleDropdownToggle}
                >
                  Industries
                </NavLink>
                <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      exact
                      to="/agritech"
                      activeClassName="active"
                      onClick={handleDropdownClose}
                    >
                      Agritech
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      exact
                      to="/waterSolutions"
                      activeClassName="active"
                      onClick={handleDropdownClose}
                    >
                      Water Resource Management
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      exact
                      to="/customizedIt"
                      activeClassName="active"
                      onClick={handleDropdownClose}
                    >
                      Customized IT Solutions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      exact
                      to="/branding"
                      activeClassName="active"
                      onClick={handleDropdownClose}
                    >
                      Branding & Marketing
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/solutions"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Solutions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/partnership"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Partnership
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
