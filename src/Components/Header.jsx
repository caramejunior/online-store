import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="search">
          <label
            data-testid="home-initial-message"
            htmlFor="Product"
          >
            <small>Digite algum termo de pesquisa ou escolha uma categoria.</small>
            <input
              type="text"
              name="Product"
              id="Product"
            />
          </label>
          <button type="submit">Pesquisar</button>
        </div>
        <div className="shoppingCart">
          <Link
            to="/shopCart"
            data-testid="shopping-cart-button"
          >
            Carrinho

          </Link>
        </div>
      </header>
    );
  }
}
export default Header;
