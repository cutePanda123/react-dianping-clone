import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './style.css';

class Discount extends Component {
  
  render() {
    const { data } = this.props;
    return (
      <div className="discount">
        <a className="discount__header">
          <span className='discount__title'>限时优惠</span>
          <span className='discount__more'>更多优惠</span>
          <span className="discount__arrow" />
        </a>
        <div className="discount__content">
          {data.map((discount, index) => {
            return this.renderDiscountItem(discount, index);
          })}
        </div>
      </div>
    );
  }

  renderDiscountItem(discount, index) {
    return (
      <Link to={`/detail/${discount.id}`} className="discount__item" key={index}>
        <div className="discount__itemPic">
          <img width="100%" height="100%" src={discount.picture} />
        </div>
        <div className="discount_itemTitle">{discount.shop}</div>
        <div className="discount__itemPriceWrapper">
          <ins className="discount__itemCurrentPrice">
            {discount.currentPrice}
          </ins>
          <del className="discount__itemOldPrice">{discount.oldPrice}</del>
        </div>
      </Link>
    );
  }
}

export default Discount;
