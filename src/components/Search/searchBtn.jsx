import React from "react";
import "./searchBtn.css";

function SearchBtn(props) {
  return (
    <nav className="navbar navbar-collapse bg-dark">

        <input
        onChange={props.handleChange}
        className="form-control mr-sm-2"
        type="text"
        placeholder="Look Me Up"
        aria-label="Search"
        name="search"
        value={props.search}
        />
        
    </nav>
  )
}
export default SearchBtn;

