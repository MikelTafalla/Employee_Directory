import React from "react";
import "./table.css";
import API from "../../utils/API";
import TableData from "./tableData";

class Table extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.usersArr();
  }

  usersArr = () => {
    API.getUsers()
      .then(res => this.setState({ users: res.data.results }))
      .catch(err => console.log(err));
  }
  

  render() {
    return (
      <TableData 
      users={this.state.users}
      />
    )
  }//end render

}//end component

export default Table;