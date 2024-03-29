import React, { Component } from "react";
import Header from "../../components/Header";
import Tip from "../../components/Tip";
import PurchaseForm from "./components/PurchaseForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  action as purchaseActions,
  getProduct,
  getQuantity,
  getTipStatus,
  getTotalPrice,
} from "../../redux/modules/purchase";
import { getUsername } from "../../redux/modules/login";
import { actions as detailActions } from '../../redux/modules/detail';

class Purchase extends Component {
  render() {
    const { product, phone, quantity, showTip, totalPrice } = this.props;
    return (
      <div>
        <Header title="Purchase" onBackClick={this.backHander} />
        {product && (
          <PurchaseForm
            product={product}
            phone={phone}
            quantity={quantity}
            totalPrice={totalPrice}
            onSubmit={this.submitHandler}
            onSetQuantity={this.setQuantityHandler}
          />
        )}
        {showTip && (
          <Tip message="Purchase succeed" clickHandler={this.tipClickHandler} />
        )}
      </div>
    );
  }

  componentDidMount() {
    const { product } = this.props;
    if (!product) {
      const productId = this.props.match.params.id;
      this.props.detailActions.fetchProductDetail(productId);
    }
  }

  componentWillUnmount() {
    this.props.purchaseActions.setOrderQuantity(1);
  }

  tipClickHandler = () => {
    this.props.purchaseActions.closeTip();
  };

  backHander = () => {
    this.props.history.goBack();
  };

  submitHandler = () => {
    const productId = this.props.match.params.id;
    this.props.purchaseActions.submitOrder(productId);
  };

  setQuantityHandler = (quantity) => {
    this.props.purchaseActions.setOrderQuantity(quantity);
  };
}

const mapStateToProps = (state, props) => {
  const productId = props.match.params.id;
  return {
    product: getProduct(state, productId),
    quantity: getQuantity(state),
    showTip: getTipStatus(state),
    phone: getUsername(state),
    totalPrice: getTotalPrice(state, productId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    purchaseActions: bindActionCreators(purchaseActions, dispatch),
    detailActions: bindActionCreators(detailActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);
