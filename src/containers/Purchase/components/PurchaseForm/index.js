import React, { Component } from "react";
import "./style.css";

class PurchaseForm extends Component {
  render() {
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
              <input className="purchaseForm__quantity" />
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
            <div className="purchaseForm__rowValue">¥120.00</div>
          </div>
          <div className="purchaseForm__row">
            <div className="purchaseForm__rowLabel">Phone</div>
            <div className="purchaseForm__rowValue">1234567890</div>
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

  quantityIncreaseHandler = () => {};
  quantityDescreaseHandler = () => {};
  orderSubmitHandler = () => {};
}

export default PurchaseForm;
