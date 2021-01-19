import React, { Component } from "react";
import Category from "./components/Category";
import Discount from "./components/Discount";
import FavoriteList from "./components/FavoriteList";
import Headline from './components/Headline';

class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <Headline />
        <Discount />
        <FavoriteList />
      </div>
    );
  }
}

export default Home;
