import React, { Component } from 'react';
import '../css/Dropdown.css';
import {Alert} from 'react-alert';

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayMenu : false,
            //selectedMenu : 'home',
        };
        
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.handleAboutButtonClick = this.handleAboutButtonClick.bind(this);
        this.handleMapButtonClick = this.handleMapButtonClick.bind(this);
       // this.changeSelectedMenuState = this.changeSelectedMenuState.bind(this);
    };

    showDropdownMenu(event){
        event.preventDefault();
        this.setState({ displayMenu: true}, () => {
            document.addEventListener('click', this.hideDropdownMenu)
        });
    }
    hideDropdownMenu(event){
        event.preventDefault();
        this.setState({ displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropdownMenu)
        });
    }

   /* changeSelectedMenuState(newSelectedMenu){
        this.setState({selectedMenu: newSelectedMenu});
        alert('SELECTED MENUUUUUUUUUUUUUUU' + this.state.selectedMenu);
    }*/

    handleAboutButtonClick(){
        //this.changeSelectedMenuState('About');
        //this.setState({selectedMenu: "about"});
       // alert('SELECTED MENUUUUUUUUUUUUUUU' + this.state.selectedMenu);
       this.props.onDropdownItemClick({selectedMenu: "about"/*this.state.selectedMenu*/});
    }
    handleMapButtonClick(){
        //alert("Map button is clicked");
        this.props.onDropdownItemClick({selectedMenu: "map"/*this.state.selectedMenu*/});
    }

  render() {
    return (
        /*<div  className="dropdown" style = {{background:"red",width:"200px"}} >
        <div className="button" onClick={this.showDropdownMenu}> Menu </div>

         { this.state.displayMenu ? (
         <ul>
        <li><a className="active" href="#Create Page">Map</a></li>
        <li onClick ={this.handleAboutButtonClick}>AboutUs</li>
         </ul>
       ):
       (
         null
       )
       }
      </div>*/
      <div className= "dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
       <a onClick ={this.handleMapButtonClick}>Map</a>
       <a onClick ={this.handleAboutButtonClick}>AboutUs</a>
      </div>
      </div>
    );
  }
}

export default Dropdown;