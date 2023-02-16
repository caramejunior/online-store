import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import ShoppingCart from '../pages/ShoppingCart';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopCart" component={ ShoppingCart } />
          <Route path="/ProductDetail/:id" component={ ProductDetail } />
        </Switch>
      </div>
    );
  }
}
