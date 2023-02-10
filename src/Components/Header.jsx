import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Vector from '../images/Vector.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="search">
          <label
            data-testid="home-initial-message"
            htmlFor="Product"
          >
            <small>Digite algum termo de pesquisa ou escolha uma categoria.</small>
            <br />
            <input
              type="text"
              name="Product"
              id="Product"
            />
          </label>
          <button
            type="submit"
          >
            Pesquisar

          </button>
        </div>
        <div className="image">
          <img src={ Logo } alt="logo" />
        </div>
        <div className="shoppingCart">
          <Link
            to="/shopCart"
            data-testid="shopping-cart-button"
            className="link"
          >
            <img src={ Vector } alt="carrinho" />
            <br />
            <small>Carrinho</small>

          </Link>
        </div>
      </header>
    );
  }
}
