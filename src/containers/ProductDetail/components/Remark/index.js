import React, { Component } from "react";
import './style.css';

class Remark extends Component {
  render() {
    return (
      <div className="remark">
        <div className="remark__header">
          Customer notice
          <i className="remark__icon"></i>
        </div>
        <div className="remark__list">
          <dl className="remark__item">
            <dt className="remark__itemTitle">Expiration date</dt>
            <dd className="remark__itemDesc">2018-10-20至2019-09-15</dd>
            <dt className="remark__itemTitle">Exclusion date</dt>
            <dd className="remark__itemDesc">有效期内周末、法定节假日可用</dd>
            <dt className="remark__itemTitle">Valid date</dt>
            <dd className="remark__itemDesc">团购券使用时间：11:00-22:00</dd>
            <dt className="remark__itemTitle">Reservation notice</dt>
            <dd className="remark__itemDesc">
              无需预约，消费高峰时可能需要等位
            </dd>
            <dt className="remark__itemTitle">Minimal requirements</dt>
            <dd className="remark__itemDesc">每张团购券建议2人使用</dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Remark;
