import React, { Component } from "react";
import './style.css';

class Cofirmation extends Component {
  render() {
    const {
      content,
      onCancel,
      onConfirm,
      cancelText,
      confirmText,
    } = this.props;
    return (
      <div className="confirmation__background">
        <div className="confirmation__alert">
          <div className="confirmation__content">{content}</div>
          <div className="confirmation__btns">
            <a className="confirmation__btn" onClick={onCancel}>
              {cancelText}
            </a>
            <a className="confirmation__btn" onClick={onConfirm}>
              {confirmText}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cofirmation;
