import React, { Component } from 'react';
import Header from '../Components/Header';
import Categories from '../Components/Categories';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
      </div>
    );
  }
}

export default Home;
