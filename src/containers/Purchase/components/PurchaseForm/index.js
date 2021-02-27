import React, { Component } from "react";
import "./style.css";

class PurchaseForm extends Component {
  render() {
    const {
      product: { totalPrice },
      quantity,
      phone,
    } = this.props;
    return (
      <div className="purchaseForm">
        <div className="purchaseForm__wrapper">
          <div className="purchaseForm__row">
            <div className="purchaseForm__rowLabel">Quantity</div>
            <div className="purchaseForm__rowValue">
              <span
                className="purchaseForm__counter--dec"
                onClick={this.quantityDescreaseHandler}
              >
                -
              </span>
              <input
                className="purchaseForm__quantity"
                type="number"
                onChange={this.inputChangeHandler}
                value={quantity}
              />
              <span
                className="purchaseForm__counter--inc"
                onClick={this.quantityIncreaseHandler}
              >
                +
              </span>
            </div>
          </div>
          <div className="purchaseForm__row">
            <div className="purchaseForm__rowLabel">Cost</div>
            <div className="purchaseForm__rowValue">¥{totalPrice}</div>
          </div>
          <div className="purchaseForm__row">
            <div className="purchaseForm__rowLabel">Phone</div>
            <div className="purchaseForm__rowValue">{phone}</div>
          </div>
        </div>
        <ul className="purchaseForm__remark">
          <li className="purchaseForm__remarkItem">
            <i className="purchaseForm__sign"></i>
            <span className="purchaseForm__desc">No reason return</span>
          </li>
          <li>
            <i className="purchaseForm__sign"></i>
            <span className="purchaseForm__desc">
              No-expiration date return
            </span>
          </li>
        </ul>
        <a className="purchaseForm__submit" onClick={this.orderSubmitHandler}>
          Submit order
        </a>
      </div>
    );
  }

  quantityIncreaseHandler = () => {
    const { quantity } = this.props;
    this.props.onSetQuantity(quantity + 1);
  };
  quantityDescreaseHandler = () => {
    const { quantity } = this.props;
    if (quantity == 0) {
      return;
    }
    this.props.onSetQuantity(quantity - 1);
  };
  inputChangeHandler = (e) => {
    const quantity = e.target.value;
    this.props.onSetQuantity(Number.parseInt(quantity));
  };
  orderSubmitHandler = () => {
    const { quantity } = this.props;
    if (quantity > 0) {
      this.props.onSubmit();
    }
  };
}

export default PurchaseForm;
