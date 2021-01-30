import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class BuyButton extends Component {
  render() {
    const { productId } = this.props;
    return (
      <Link className="buyButton" to={`/purchase/${productId}`}>
        Buy now
      </Link>
    );
  }
}

export default BuyButton;
