import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class ProductOverview extends Component {
  render() {
    const {
      id,
      shop,
      picture,
      description,
      currentPrice,
      oldPrice,
    } = this.props.data;
    return (
      <div className="productOverview">
        <div className="productOverview__header">
          <div className="productOverview__imgContainer">
            <img
              alt="product image"
              className="productOverview__img"
              src={picture}
            />
          </div>
          <div className="productOverview__baseInfo">
            <div className="productOverview__title">{shop}</div>
            <div className="productOverview__content">{description}</div>
          </div>
        </div>
        <div className="productOverview__purchase">
          <span className="productOverview__currence">¥</span>
          <span className="productOverview__price">{currentPrice}</span>
          <span className="productOverview__price--old">¥{oldPrice}</span>
          <Link className="productOverview__btn" to={`/purchase/${id}`}>
            Buy it now
          </Link>
        </div>
        <ur className="productOverview__remark">
          <li className="productOverview__remarkItem">
            <i className="productOverview__sign1"></i>
            <span className="productOverview__desc">No reason return</span>
          </li>
          <li className="productOverview__remarkItem">
            <i className="productOverview__sign2"></i>
            <span className="productOverview__desc">No return deadline</span>
          </li>
        </ur>
      </div>
    );
  }
}

export default ProductOverview;
