import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="Product"
          id="Product"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.

        </p>
      </div>
    );
  }
}
export default Search;
