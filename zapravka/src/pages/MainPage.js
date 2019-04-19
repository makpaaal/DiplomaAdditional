import React, { Component } from 'react';
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import AboutUs from './AboutUs'
import MapPage from './MapPage'
import SearchResultPage from './SearchResultPage'
import '../css/MainPage.css';

class MainPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedPage : 'home',
      srchCity: "",
      srchPetrol: ""
    };
  };

  handleDropdownItemClick = (menu) =>{
    this.setState({selectedPage : menu.selectedMenu});
  }
  
  handleSearchButtonClick = (search) => {
    this.setState({
      selectedPage : search.selectedMenu,
      srchCity: search.srchCity,
      srchPetrol: search.srchPetrol});
  }

  render() {
    if(this.state.selectedPage === 'map'){
    return (
      <div>
      <MapPage></MapPage>
      </div>
    )
  }
  else if (this.state.selectedPage === 'about'){
    return(
      <div>
        <AboutUs></AboutUs>
      </div>
    )
  }
  else if (this.state.selectedPage === "searchresult"){
    return(
      <div>
        <SearchResultPage srchCity = {this.state.srchCity} srchPetrol = {this.state.srchPetrol}></SearchResultPage>
        </div>
    )
  }
  else return (
    <div>
          <Header onDropdownItemClick = {this.handleDropdownItemClick}></Header>
          <Body onSearchButtonClick = {this.handleSearchButtonClick}></Body>
          <Footer></Footer>
      </div>
  )
  }
  
}

export default MainPage;
