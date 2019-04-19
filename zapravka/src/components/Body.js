import React, { Component } from 'react';
import '../css/Body.css';
import Search from '../components/Search'

class Body extends Component {

  constructor(props){
    super(props);
  }

  handleSearchButtonClick = (search) => {
    this.props.onSearchButtonClick(search);
  };

  render() {
    return (
      <div id = "main-container">
          <Search onSearchButtonClick = {this.handleSearchButtonClick}></Search>
      </div>
    );
  }
}

export default Body;
