import React from "react";
import "./table.css";
import API from "../../utils/API";
import TableData from "./tableData";
import SearchBtn from "../Search/searchBtn";

class Table extends React.Component {
  state = {
    search: "",
    className: "fa fa-fw fa-sort up",
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

  //function in charge of filtering users
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    // This if statement is for when someone hits backspace and makes input empty
    if (value === "") {
      this.setState({ filteredUsers: this.state.originalUsers })
      //if start typing, we start filtering users
    } else if (value !== "") {
      const filteredUsers = this.state.originalUsers.filter(data =>
        data.name.first.toLowerCase().startsWith(value.toLowerCase()) || data.name.last.toLowerCase().startsWith(value.toLowerCase()) || (`${data.name.first} ${data.name.last}`).toLowerCase().startsWith(value.toLowerCase())
      );
      this.setState({ filteredUsers });
    }
  };

  //function in charge of changing the class name. It'll be called onsorted users function
  className = (className) => {
    if(className === "fa fa-fw fa-sort up"){
      this.setState({ className: "fa fa-fw fa-sort down" })
    } else if(className === "fa fa-fw fa-sort down"){
      this.setState({ className: "fa fa-fw fa-sort up" })
    }
  }

  //function to sort users ascending or descending
  handleSort = e => {
    let {className, id} = e.target
    
    //order by name
    if(className === "fa fa-fw fa-sort up" && id === "name"){
      const sortedUsersUp = this.state.filteredUsers.sort((a, b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase()) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersUp });
    } else if(className === "fa fa-fw fa-sort down" && id === "name"){
      const sortedUsersDown = this.state.filteredUsers.sort((a, b) => (a.name.first.toLowerCase() < b.name.first.toLowerCase()) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersDown });

      //order by phone
    } else if(className === "fa fa-fw fa-sort up" && id === "phone"){
      const sortedUsersUp = this.state.filteredUsers.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersUp });
    } else if(className === "fa fa-fw fa-sort down" && id === "phone"){
      const sortedUsersDown = this.state.filteredUsers.sort((a, b) => (a.phone < b.phone) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersDown });

      //order by email
    } else if(className === "fa fa-fw fa-sort up" && id === "email"){
      const sortedUsersUp = this.state.filteredUsers.sort((a, b) => (a.email > b.email) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersUp });
    } else if(className === "fa fa-fw fa-sort down" && id === "email"){
      const sortedUsersDown = this.state.filteredUsers.sort((a, b) => (a.email < b.email) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersDown });

      //order by country
    } else if(className === "fa fa-fw fa-sort up" && id === "country"){
      const sortedUsersUp = this.state.filteredUsers.sort((a, b) => (a.location.country.toLowerCase() > b.location.country.toLowerCase()) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersUp });
    } else if(className === "fa fa-fw fa-sort down" && id === "country"){
      const sortedUsersDown = this.state.filteredUsers.sort((a, b) => (a.location.country.toLowerCase() < b.location.country.toLowerCase()) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersDown });
    }
  }

  render() {
    return (
      <div>
        <SearchBtn
          search={this.state.search}
          handleChange={this.handleChange}
        />
        <TableData
          users={this.state.filteredUsers}
          handleSort={this.handleSort}
          class={this.state.className}
        />
      </div>
    )
  }//end render

}//end component

export default Table;
