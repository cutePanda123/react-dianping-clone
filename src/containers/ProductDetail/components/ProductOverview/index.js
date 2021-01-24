import React, { Component } from "react";
import './style.css';

class ProductOverview extends Component {
  render() {
    return (
      <div className="productOverview">
        <div className="productOverview__header">
          <div className="productOverview__imgContainer">
            <img
              alt="product image"
              className="productOverview__img"
              src="https://p0.meituan.net/deal/e6864ed9ce87966af11d922d5ef7350532676.jpg@450w_280h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20"
            />
          </div>
          <div className="productOverview__baseInfo">
            <div className="productOverview__title">院落创意菜</div>
            <div className="productOverview__content">
              仅售19.9元！价值48元的百香果（冷饮）1扎，提供免费WiFi。
            </div>
          </div>
        </div>
        <div className="productOverview__purchase">
          <span className="productOverview__currence">¥</span>
          <span className="productOverview__price">19.9</span>
          <span className="productOverview__price--old">¥48</span>
          <a className="productOverview__btn">Buy it now</a>
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
