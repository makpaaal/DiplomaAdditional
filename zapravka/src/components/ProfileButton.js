import React, { Component } from 'react';
import '../css/ProfileButton.css';
import Dropdown from '../components/Dropdown';

class ProfileButton extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id= "profilebutton-main-container">
      <button id = "profileButton">Profile</button>
      </div>
    );
  }
}

export default ProfileButton;