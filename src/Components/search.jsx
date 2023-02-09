import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/Shopping-Cart" data-testid="shopping-cart-button">

          <button> Carrinho </button>

        </Link>
      </div>
    );
  }
}
export default Search;
