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
        {
          categories.map((categorie) => (
            <button type="submit" key={ categorie.id } data-testid="category">
              { categorie.name }
            </button>
          ))
        }
      </div>
    );
  }
}

export default Categories;
