import React, { Component } from 'react';
import '../css/Header.css';
import Dropdown from '../components/Dropdown';
import ProfileButton from '../components/ProfileButton'

class Header extends Component {
  constructor(props){
    super(props);

    //this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
  }

  handleDropdownItemClick = (menu) => {
    this.props.onDropdownItemClick(menu);
  };

  render() {
    return (
      <div id= "header-main-container">
      <Dropdown onDropdownItemClick = {this.handleDropdownItemClick}></Dropdown>
      <ProfileButton></ProfileButton>
      </div>
    );
  }
}

export default Header;