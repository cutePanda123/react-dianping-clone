import React, { Component } from "react";
import Category from "./components/Category";
import Discount from "./components/Discount";
import Headline from './components/Headline';

class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <Headline />
        <Discount />
      </div>
    );
  }
}

export default Home;
