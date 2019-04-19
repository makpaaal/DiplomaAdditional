import React, { Component } from 'react';
import '../css/Search.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      srchCity: "",
      srchPetrol: "",
    }
  }

  searchCity = (event) => {
    this.setState({
      srchCity: event.target.value
    });
  }

  searchPetrol = (event) => {
    this.setState({
      srchPetrol: event.target.value
    });
  }

  startSearch = () => {
    this.props.onSearchButtonClick({
      selectedMenu: "searchresult",
      srchCity: this.state.srchCity,
      srchPetrol: this.state.srchPetrol});
  }

  render() {
    return (
      <div id= "search-main-container">
      <table className = "searchField">
          <tr>
      <td><input type="text" value = {this.state.srchCity} placeholder = "City:" onChange = {this.searchCity}/></td>
      <td><input type="text" value = {this.state.srchPetrol} placeholder = "Petrol type:" onChange = {this.searchPetrol}/></td>
      <td><input type="button" value="Search" onClick = {this.startSearch}/></td>
      </tr>
      </table>
      </div>
    );
  }
}

export default Search;