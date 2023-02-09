import React, { Component } from 'react';
import Search from '../Components/search';
import Categories from '../Components/Categories';

class Home extends Component {
  render() {
    return (
      <div>
        <Categories />
        <Search />
      </div>
    );
  }
}

export default Home;
