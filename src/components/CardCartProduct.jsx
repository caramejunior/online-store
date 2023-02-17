import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardCartProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <div
        className="cardUd"
        style={ {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '10px',
          margin: '10px',
          // eslint-disable-next-line sonarjs/no-duplicate-string
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'white',
          cursor: 'pointer',
          color: 'black',
          textAlign: 'center',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
          lineHeight: '20px',
          transition: 'all 0.3s ease 0s',
          ':hover': {
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'white',
            color: 'black',
          },
          ':active': {
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'white',
            color: 'black',
          },
          ':focus': {
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'white',
            color: 'black',
          },
        } }
      >
        <div className="thumbnail">
          <img src={ product?.thumbnail } alt={ product?.title } />
        </div>
        <div className="descricao">
          <small
            data-testid="shopping-cart-product-name"
          >
            {product?.title}

          </small>
          <p
            data-testid="shopping-cart-product-price"
          >
            {product?.price?.toLocaleString(
              'pt-BR',
              {
                style: 'currency',
                currency:
                                'BRL',
              },
            )
              ?.toUpperCase()}

          </p>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            {`Quantidade: ${product?.quantity}`}

          </p>
        </div>
      </div>
    );
  }
}

CardCartProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
  // updateProdutCart: PropTypes.func.isRequired,
};
