import React, { Component } from 'react';

class SearchResultPage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div >
          <h1>Search Results</h1>
          <h3>SearchedCity: {this.props.srchCity}</h3>
          <h3>SearchedPetrol: {this.props.srchPetrol}</h3>
      </div>
    );
  }
}

export default SearchResultPage;
