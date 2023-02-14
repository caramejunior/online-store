import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CatProd from '../pages/CatProd';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopCart" component={ ShoppingCart } />
        <Route path="/catProd/:id" component={ CatProd } />
      </Switch>
    );
  }
}
