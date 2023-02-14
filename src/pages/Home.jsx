import React, { Component } from 'react';
import Header from '../Components/Header';
import Categories from '../Components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  state = {
    query: '',
    queryList: [],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });

    console.log(name, value);
  };

  handleClick = async () => {
    const { query } = this.state;
    const response = await getProductsFromCategoryAndQuery('', query);
    const queryList = response.results;
    console.log(queryList);
    this.setState({
      queryList,

    });
  };

  render() {
    const { queryList } = this.state;
    return (
      <div>
        <Header handleChange={ this.handleChange } handleClick={ this.handleClick } />
        <div className="conteudo">
          <Categories />
          { queryList.length === 0 ? <h1> Nenhum produto foi encontrado </h1> : (
            queryList.map((query) => (
              <p data-testid="product" key={ query.id }>{ query.title }</p>
            )))}
        </div>

      </div>
    );
  }
}

export default Home;
