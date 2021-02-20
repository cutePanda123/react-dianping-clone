import React, { Component } from "react";
import "./style.css";
class OrderItem extends Component {
  render() {
    const {
      data: { title, state, picUrl, category, text, type },
    } = this.props;
    return (
      <div className="orderItem">
        <div className="orderItem__title">
          <span>{title}</span>
        </div>
        <div className="orderItem__main">
          <div className="orderItem__imgWrapper">
            <div className="orderItem__tag">{state}</div>
            <img alt='order photo' className="orderItem__img" src={picUrl} />
          </div>
          <div className="orderItem__content">
            <div className="orderItem__line">{text[0]}</div>
            <div className="orderItem__line">{text[1]}</div>
          </div>
        </div>
        <div className="orderItem__bottom">
          <div className="orderItem__type">{category}</div>
          <div>
            {type === 1 ? <div className="orderItem_btn">Review</div> : null}
            <div className="orderItem__btn" onClick={this.removeHandler}>Delete</div>
          </div>
        </div>
      </div>
    );
  }

  removeHandler = () => {
    this.props.onRemove();
  }
}

export default OrderItem;
