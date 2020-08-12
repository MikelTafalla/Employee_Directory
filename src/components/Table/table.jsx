import React from "react";
import "./table.css";
import API from "../../utils/API";
import TableData from "./tableData";
import SearchBtn from "../Search/searchBtn";

class Table extends React.Component {
  state = {
    search: "",
    originalUsers: [],
    filteredUsers: [],
  };
  //activate the usersArr function that will populate state.users
  componentDidMount() {
    this.usersArr();
  }

  //Get user from the function that uses axios on the API file
  usersArr = () => {
    API.getUsers()
      .then(res => this.setState({ originalUsers: res.data.results, filteredUsers: res.data.results }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    // This if statement is for when someone hits backspace and makes input empty
    if (value === "") {
      this.setState({ filteredUsers: this.state.originalUsers })
    } else if (value !== "") {
      const filteredUsers = this.state.originalUsers.filter(data =>
        data.name.first.toLowerCase().startsWith(value.toLowerCase()) || data.name.last.toLowerCase().startsWith(value.toLowerCase()) || (`${data.name.first} ${data.name.last}`).toLowerCase().startsWith(value.toLowerCase())
      );
      this.setState({ filteredUsers });
    }
  };

  render() {
    return (
      <div>
        <SearchBtn
          search={this.state.search}
          handleChange={this.handleChange}
        />
        <TableData
          users={this.state.filteredUsers}
        />
      </div>
    )
  }//end render

}//end component

export default Table;