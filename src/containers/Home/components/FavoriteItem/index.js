import React, { Component } from "react";
import './style.css';

class FavoriteItem extends Component {
  render() {
    const {
      shop,
      tag,
      picture,
      product,
      currentPrice,
      oldPrice,
      saleDes,
    } = this.props.data;
    return (
      <a className="favoriteItem">
        <div className="favoriteItem__picContainer">
          <div className="favoriteItem__picTag">{tag}</div>
          <img className="favoriteItem__pic" src={picture} />
        </div>
        <div className="favoriteItem__content">
          <div className="favoriteItem__shop">{shop}</div>
          <div className="favoriteItem__product">{product}</div>
          <div className="favoriteItem__detail">
            <div className="favoriteItem__price">
              <ins className="favoriteItem__currentPrice">{currentPrice}</ins>
              <del className="favoriteItem__oldPrice">{oldPrice}</del>
            </div>
            <ins className="favoriteItem__sale">{saleDes}</ins>
          </div>
        </div>
      </a>
    );
  }
}

export default FavoriteItem;
