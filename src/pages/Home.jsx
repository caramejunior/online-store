import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import Card from '../components/Card';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import logo from '../images/logo.png';
import vector from '../images/Vector.png';

export default class Home extends Component {
  state = {
    query: '',
    category: [],
  };

  componentDidMount() {
    this.categories();
  }

  categories = async () => {
    const category = await getCategories();
    this.setState({ category });
    // console.log(category);
  };

  getQuery = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    // console.log(name, value);
  };

  getProductsList = async (categoria, termo) => {
    const response = await getProductsFromCategoryAndQuery(categoria, termo);
    const queryList = response.results;
    this.setState({ queryList });
    console.log(queryList);
  };

  render() {
    const { category, query, queryList } = this.state;
    return (
      <div className="pageHome">
        <header>
          <Link to="/">
            <AiFillHome className="home" />
          </Link>
          <img src={ logo } alt="logo" />
          <Link data-testid="shopping-cart-button" to="/shopCart">
            <img src={ vector } alt="carrinho" />
          </Link>
        </header>
        <div className="categories">
          {
            category.map((cat) => (
              <button
                onClick={ () => this.getProductsList(cat.id, '') }
                data-testid="category"
                type="submit"
                key={ cat.id }
              >
                { cat.name }
              </button>
            ))
          }
        </div>
        {
          queryList ? null : (
            <h1
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>
          )
        }
        <div className="search">
          <input
            name="query"
            type="text"
            onChange={ this.getQuery }
            data-testid="query-input"
          />
          <button
            onClick={ () => this.getProductsList('', query) }
            type="submit"
            data-testid="query-button"
          >
            Pesquisar

          </button>
        </div>
        {
          queryList?.length === 0 ? <h1>Nenhum produto foi encontrado</h1> : null
        }
        <div className="cardList">
          {
            queryList?.map((prod) => (
              <Card
                key={ prod.id }
                price={ prod.price }
                title={ prod.title }
                thumbnail={ prod.thumbnail }
                id={ prod.id }
              />
            ))
          }
        </div>

      </div>
    );
  }
}
