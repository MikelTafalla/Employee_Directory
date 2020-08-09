import React from "react";
import "./header.css";


function Header() {
  return (
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">See all our employees. You may filter them by..</p>
      </div>
    </div>
  )
}

export default Header;

