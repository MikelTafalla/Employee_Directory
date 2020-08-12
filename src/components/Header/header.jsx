import React from "react";
import "./header.css";


function Header() {
  return (
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">See all our employees.<br></br>You may reorganized the table by name, phone, email, country where office is located, <br></br>or filter specific employees by their names</p>
      </div>
    </div>
  )
}

export default Header;

