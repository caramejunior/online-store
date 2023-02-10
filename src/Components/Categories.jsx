import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.takeCategories();
  }

  takeCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
    console.log(categories);
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="categiries">
        <h2>Categorias</h2>
        {
          categories.map((category) => (
            <button
              data-testid="category"
              type="submit"
              key={ category.name }
            >
              { category.name }
            </button>
          ))
        }
      </div>
    );
  }
}
