import React from "react";
import "./searchBtn.css";

function SearchBtn() {
  return (
    <nav className="navbar">
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  )
}
export default SearchBtn;

