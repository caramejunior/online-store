import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { price, title, thumbnail, id } = this.props;
    return (
      <div data-testid="product" className="cardUd">
        <div className="thumbnail">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="descricao">
          <small>{ title }</small>
          <p>{ `R$ ${price}` }</p>
        </div>
        <Link
          to={ `/ProductDetail/${id}` }
          className="linkProduto"
          data-testid="product-detail-link"
        >
          Saiba mais
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
