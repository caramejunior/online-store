import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    return (
      <Route>
        <div>
          <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        </div>
      </Route>
    );
  }
}
export default ShoppingCart;
