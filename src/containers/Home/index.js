import React, { Component } from "react";
import Footer from "../../components/Footer";
import Activity from "./components/Activity";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Discount from "./components/Discount";
import FavoriteList from "./components/FavoriteList";
import Headline from "./components/Headline";
import HomeHeader from "./components/HomeHeader";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  actions as homeActions,
  getFavorites,
  getDiscounts,
  getPageIndexOfFavorites,
} from "../../redux/modules/home";

class Home extends Component {
  render() {
    const {discounts, favorites, pageIndex} = this.props;
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Category />
        <Headline />
        <Activity />
        <Discount data={discounts}/>
        <FavoriteList data={favorites} pageIndex={pageIndex}
          fetchData={this.fetchMoreFavorites}
        />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.props.homeActions.fetchDiscounts();
  }

  fetchMoreFavorites =() => {
    this.props.homeActions.fetchFavorites();
  }
}

const mapStateToProps = (state, props) => {
  return {
    favorites: getFavorites(state),
    discounts: getDiscounts(state),
    pageIndex: getPageIndexOfFavorites(state),
  };
};

const mapDispatchTopProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Home);
