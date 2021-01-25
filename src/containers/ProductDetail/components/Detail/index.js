import React, { Component } from "react";
import './style.css';

class Detail extends Component {
  render() {
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
                Drink
              </th>
            </tr>
            <tr className="detail__row">
              <td>百果香（冷饮）</td>
              <td className="detail__td--alignRight">1扎</td>
              <td className="detail__td--alignRight">48元</td>
            </tr>
            <tr className="detail__row">
              <td />
              <td className="detail__td--price">
                Original price
                <br />
                <strong className="detail__td--priceNew">Sales price</strong>
              </td>
              <td className="detail__td--price">
                48元
                <br />
                <strong className="detail__td--priceNew">19.9元</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="detail__remark">
        免费提供餐巾纸
        </div>
        <div className="detail__more">
            <span>More information</span>
            <span className='detail__notice'>(Suggest open with Wifi)</span>
            <i className='detail__arrow'></i>
        </div>
      </div>
    );
  }
}

export default Detail;
