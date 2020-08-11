import React from "react";

function TableData(props) {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
            <th scope="col">Phone<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
            <th scope="col">Email<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
            <th scope="col">Counrty of Office<span id="clickable"><i className="fa fa-fw fa-sort"></i></span></th>
          </tr>
        </thead>
        <tbody>
        {props.users.map(user => (
          <tr key={user.email}>
            <td><img src={user.picture.medium} alt="image" /></td>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.location.country}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
}//end TableData

export default TableData;