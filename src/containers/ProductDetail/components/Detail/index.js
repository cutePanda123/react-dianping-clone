import React, { Component } from "react";
import "./style.css";

class Detail extends Component {
  render() {
    const {
      detail: { category, products, remark },
      currentPrice,
      oldPrice,
    } = this.props.data;
    return (
      <div className="deatil">
        <div className="detail__header">
          <span>Discount details</span>
          <i className="detail__headerIcon"></i>
        </div>
        <table cellPadding="0" cellSpacing="0" className="detail__table">
          <tbody>
            <tr className="detail__row">
              <th colSpan="3" className="detail__category">
                {category}
              </th>
            </tr>
            {products.map((item, index) => {
              return (
                <tr key={index} className="detail__row">
                  <td>{item.name}</td>
                  <td className="detail__td--alignRight">{item.quantity}扎</td>
                  <td className="detail__td--alignRight">{item.price}元</td>
                </tr>
              );
            })}

            <tr className="detail__row">
              <td />
              <td className="detail__td--price">
                Original price
                <br />
                <strong className="detail__td--priceNew">Sales price</strong>
              </td>
              <td className="detail__td--price">
                {oldPrice}元
                <br />
                <strong className="detail__td--priceNew">
                  {currentPrice}元
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="detail__remark">{remark}</div>
        <div className="detail__more">
          <span>More information</span>
          <span className="detail__notice">(Suggest open with Wifi)</span>
          <i className="detail__arrow"></i>
        </div>
      </div>
    );
  }
}

export default Detail;
