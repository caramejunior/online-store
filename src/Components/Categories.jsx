import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
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
  };

  render() {
    const { categories } = this.state;

    return (
      <div>
        <h2>Categorias</h2>
        {
          categories.map((category) => (
            <button type="submit" key={ category.id } data-testid="category">
              { category.name }
            </button>
          ))
        }
      </div>
    );
  }
}

export default Categories;
