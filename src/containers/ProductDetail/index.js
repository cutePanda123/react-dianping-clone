import React, { Component } from "react";
import BuyButton from "./components/BuyButton";
import Detail from "./components/Detail";
import ProductOverview from "./components/ProductOverview";
import Remark from "./components/Remark";
import ShopInfo from "./components/ShopInfo";
import Header from '../../components/Header';

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Header
          isGreyMode={true}
          title="Offer detail"
          onBackClick={this.backClickHander}
        />
        <ProductOverview />
        <ShopInfo />
        <Detail />
        <Remark />
        <BuyButton />
      </div>
    );
  }

  backClickHander = () => {}
}

export default ProductDetail;
