import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardCartProduct from '../components/CardCartProduct';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')),
    };
  }

  componentDidMount() {
    const ret = JSON.parse(localStorage.getItem('cart'));

    if (ret) {
      this.setState({ cart: ret });
    }
  }

  renderCart() {
    const { cart } = this.state;
    if (cart && cart?.length > 0) {
      return (
        <div
          style={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          {cart.map((item) => (
            <CardCartProduct
              key={ item.id }
              product={ item }
            />
          ))}
        </div>
      );
    }
    return (
      <div
        style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        <CardCartProduct
          product={ {
            title: 'Pequeno Principe, O',
            quantity: '1',
          } }
        />
      </div>
    );
  }

  render() {
    return (
      <div
        style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        } }
      >
        <Link to="/">Voltar</Link>
        <h1>Carrinho de compras</h1>
        {
          this.renderCart()
        }
      </div>
    );
  }
}
