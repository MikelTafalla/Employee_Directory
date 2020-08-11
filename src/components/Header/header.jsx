import React from "react";
import "./header.css";


function Header() {
  return (
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">See all our employees. You may filter them by name, phone, email, DOB, <br></br>or look for specific employees typing their names</p>
      </div>
    </div>
  )
}

export default Header;

