import React, { Component } from "react";
import "./style.css";

class ShopInfo extends Component {
  render() {
    const { data: relatedShop, relatedShopNum } = this.props;
    const { shop: name, star, address, phone } = relatedShop;
    return (
      <div className="shopInfo">
        <div className="shopInfo__header">
          Shop count ({relatedShopNum})
          <span className="shopInfo__arrow"></span>
        </div>
        <div className="shopInfo__middle">
          <div className="shopInfo__middleLeft">
            <div className="shopInfo__shopName">
              {name}
              <div className="shopInfo__starsWrapper">
                <span className="shopInfo__stars">
                  <i
                    className="shopInfo__stars--red"
                    style={{ width: 2 * star + "%" }}
                  ></i>
                </span>
                <span className="shopInfo__distance">100km</span>
              </div>
            </div>
          </div>
          <a className="shopInfo__middleRight" href={`tel://${phone}`}>
            <i className="shopInfo__phoneIcon"></i>
          </a>
        </div>
        <div className="shopInfo__footer">
          <i className="shopInfo__locationIcon"></i>
          {address}
        </div>
      </div>
    );
  }
}

export default ShopInfo;
