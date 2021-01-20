import React, { Component } from "react";
import Footer from "../../components/Footer";
import Activity from "./components/Activity";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Discount from "./components/Discount";
import FavoriteList from "./components/FavoriteList";
import Headline from './components/Headline';
import HomeHeader from "./components/HomeHeader";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Category />
        <Headline />
        <Activity />
        <Discount />
        <FavoriteList />
        <Footer />
      </div>
    );
  }
}

export default Home;
