import React, { Component } from "react";
import { connect } from "react-redux";
import BuyButton from "./components/BuyButton";
import Detail from "./components/Detail";
import ProductOverview from "./components/ProductOverview";
import Remark from "./components/Remark";
import ShopInfo from "./components/ShopInfo";
import Header from "../../components/Header";
import {
  actions as detailActions,
  getProduct,
  getRelatedShop,
} from "../../redux/modules/detail";
import { getProductDetail } from "../../redux/modules/entities/products";
import { bindActionCreators } from "redux";

class ProductDetail extends Component {
  render() {
    const { product, relatedShop } = this.props;
    return (
      <div>
        <Header
          isGreyMode={true}
          title="Offer detail"
          onBackClick={this.backClickHander}
        />
        {product && <ProductOverview data={product} />}
        {relatedShop && (
          <ShopInfo
            data={relatedShop}
            relatedShopNum={product.shopIds.length}
          />
        )}
        {product && (
          <>
            <Detail data={product} />
            <Remark data={product} />
            <BuyButton productId={product.id} />
          </>
        )}
      </div>
    );
  }

  componentDidMount() {
    const { product } = this.props;
    if (!product) {
      const productId = this.props.match.params.id;
      this.props.detailActions.fetchProductDetail(productId);
    } else if (!this.props.relatedShop) {
      this.props.detailActions.fetchShop(product.nearestShop);
    }
  }

  componentDidUpdate(preProps) {
    if (!preProps.product && this.props.product) {
      this.props.detailActions.fetchShop(this.props.product.nearestShop);
    }
  }

  backClickHander = () => {
    this.props.history.goBack();
  };
}

const mapStateToProps = (state, props) => {
  const productId = props.match.params.id;
  return {
    product: getProduct(state, productId),
    relatedShop: getRelatedShop(state, productId),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailActions: bindActionCreators(detailActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
