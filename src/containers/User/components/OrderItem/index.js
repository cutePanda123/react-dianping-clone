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
            <img alt="order photo" className="orderItem__img" src={picUrl} />
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
            <div className="orderItem__btn" onClick={this.removeHandler}>
              Delete
            </div>
          </div>
        </div>
        {this.renderReviewEditArea()}
      </div>
    );
  }

  renderReviewEditArea = () => {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          className="orderItem__comment"
          onChange={this.commentChangeHander}
          value=""
        />
        {this.renderReviewStars()}
        <button className="orderItem__commentBtn" onClick={null}>
          Submit
        </button>
        <button className="orderItem__commentBtn" onClick={null}>
          Cancel
        </button>
      </div>
    );
  };

  renderReviewStars = () => {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((num, index) => {
          const lightClassName = 3 >= num ? "orderItem__star--light" : "";
          return (
            <span className={`orderItem__star ${lightClassName}`}>⭐</span>
          );
        })}
      </div>
    );
  };

  commentChangeHander = () => {};

  removeHandler = () => {
    this.props.onRemove();
  };
}

export default OrderItem;
