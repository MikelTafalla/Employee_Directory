import React from "react";

function TableData(props) {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name<span onClick={props.handleSort}><i id="name" className={props.class}></i></span></th>
            <th scope="col">Phone<span onClick={props.handleSort}><i id="phone" className={props.class}></i></span></th>
            <th scope="col">Email<span onClick={props.handleSort}><i id="email" className={props.class}></i></span></th>
            <th scope="col">Country of Office<span onClick={props.handleSort}><i id="country" className={props.class}></i></span></th>
          </tr>
        </thead>
        <tbody>
        {props.users.map(user => (
          <tr key={user.email}>
            <td><img src={user.picture.medium} alt="employeePhoto" /></td>
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