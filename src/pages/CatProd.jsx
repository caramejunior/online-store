import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class CatProd extends Component {
  state = {
    queryList: [],
  };

  componentDidMount() {
    this.getAlbum();
  }

  getAlbum = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getProductsFromCategoryAndQuery(id, '');
    const queryList = response.results;
    this.setState({
      queryList,
    });
  };

  render() {
    const { queryList } = this.state;
    return (
      <div>
        <Link to="/">
          NOVA BUSCA
        </Link>
        <div>
          {
            queryList.map((query) => (
              <h1 data-testid="product" key={ query.id }>{query.title}</h1>
            ))
          }
        </div>
      </div>
    );
  }
}

CatProd.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;
