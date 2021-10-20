import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <ul className="list-navbar">
        <li>Home</li>
        <div className="vertical-line"></div>
        <li>Online Courses</li>
        <div className="vertical-line"></div>
        <li>We're Hiring</li>
        <div className="vertical-line"></div>
        <li>More</li>
      </ul>
    </div>
  );
}
