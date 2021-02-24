import React, { Component } from "react";
import "./style.css";

class OrderItem extends Component {
  render() {
    const {
      data: { title, state, picUrl, category, text, type, commentId },
      isCommenting,
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
            {type === 1 && !commentId ? (
              <div
                className="orderItem__btn"
                onClick={this.commentButtonClickHandler}
              >
                Review
              </div>
            ) : null}
            <div className="orderItem__btn" onClick={this.removeHandler}>
              Delete
            </div>
          </div>
        </div>
        {isCommenting && this.renderReviewEditArea()}
      </div>
    );
  }

  renderReviewEditArea = () => {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          className="orderItem__comment"
          onChange={this.commentChangeHander}
          value={this.props.comment}
        />
        {this.renderReviewStars()}
        <button
          className="orderItem__commentBtn"
          onClick={this.props.onCommentSubmit}
        >
          Submit
        </button>
        <button
          className="orderItem__commentBtn"
          onClick={this.props.onCommentCancel}
        >
          Cancel
        </button>
      </div>
    );
  };

  renderReviewStars = () => {
    const { stars } = this.props;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((num, index) => {
          const lightClassName = stars >= num ? "orderItem__star--light" : "";
          return (
            <span
              className={`orderItem__star ${lightClassName}`}
              onClick={this.props.onStarsChange.bind(this, num)}
            >
              ⭐
            </span>
          );
        })}
      </div>
    );
  };

  commentButtonClickHandler = () => {
    const {
      data: { id },
    } = this.props;
    this.props.onCommentButtonClick(id);
  };

  commentChangeHander = (e) => {
    this.props.commentChangeHander(e.target.value);
  };

  removeHandler = () => {
    this.props.onRemove();
  };
}

export default OrderItem;
