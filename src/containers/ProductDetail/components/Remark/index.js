import React, { Component } from "react";
import "./style.css";

class Remark extends Component {
  render() {
    const { purchaseNotes, validityPeriod } = this.props.data;
    return (
      <div className="remark">
        <div className="remark__header">
          Customer notice
          <i className="remark__icon"></i>
        </div>
        <div className="remark__list">
          <dl className="remark__item">
            <dt className="remark__itemTitle">Expiration date</dt>
            <dd className="remark__itemDesc">{validityPeriod}</dd>
          </dl>
          {purchaseNotes.map((note, index) => {
            <dl key={index} className="remark__item">
              <dt className="remark__itemTitle">{note.title}</dt>
              <dd className="remark__itemDesc">{note.content}</dd>
            </dl>;
          })}
        </div>
      </div>
    );
  }
}

export default Remark;
