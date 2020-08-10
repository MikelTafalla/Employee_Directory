import React from "react";
import "./table.css";


function Table() {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">Name<span onClick="" id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
          <th scope="col">Phone<span onClick="" id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
          <th scope="col">Email<span onClick="" id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
          <th scope="col">DOB<span onClick="" id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>XXX</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>XXX</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;