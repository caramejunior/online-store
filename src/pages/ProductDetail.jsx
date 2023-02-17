import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      produto: {},
    };
    this.getAPI = this.getAPI.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  getAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    this.setState({ produto: product });
  };

  addToCart = (product) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (cartLocalStorage) {
      const productInCart = cartLocalStorage.find((item) => item.id === product.id);
      if (productInCart) {
        const newCart = cartLocalStorage.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
      } else {
        const newCart = [...cartLocalStorage, { ...product, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
    } else {
      const newCart = [{ ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  render() {
    const { produto } = this.state;
    const { title, thumbnail, price } = produto;
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">
            {title}
          </h3>
          <img
            src={ thumbnail }
            alt={ `foto de ${title}` }
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-price">{ price }</p>
        </div>
        <button
          onClick={ () => {
            this.addToCart({
              id,
              title,
              price,
              thumbnail,
            });
          } }
          className="linkAddCarrinho"
          style={ {
            width: '20%',
          } }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetail;
