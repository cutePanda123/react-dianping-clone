import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class FavoriteItem extends Component {
  render() {
    const {
      id,
      shop,
      tag,
      picture,
      product,
      currentPrice,
      oldPrice,
      saleDes,
    } = this.props.data;
    return (
      <Link to={`/detail/${id}`} className="favoriteItem">
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
      </Link>
    );
  }
}

export default FavoriteItem;
