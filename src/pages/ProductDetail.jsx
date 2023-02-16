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
          type="button"
          data-testid="shopping-cart-button"
        >
          Adicionar ao Carrinho
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
