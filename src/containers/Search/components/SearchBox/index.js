import React, { Component } from "react";
import "./style.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }
  handleInputChange = (e) => {
    e.preventDefault();
    this.props.onInputChange(e.target.value);
  };
  handleInputClear = () => {
    this.props.onClear();
  };

  handleInputCancel = () => {
    this.props.onCancel();
  };

  handleClickItem = (item) => {
    this.props.onClickItem(item);
  };

  render() {
    const { inputText, relatedKeywords } = this.props;
    return (
      <div className="searchBox">
        <div className="searchBox__container">
          <input
            className="searchBox__text"
            value={inputText}
            onChange={this.handleInputChange}
          />
          <span
            className="searchBox__clear"
            onClick={this.handleInputClear}
          ></span>
          <span className="searchBox__cancel" onClick={this.handleInputCancel}>
            Cancel
          </span>
        </div>
        {relatedKeywords.length > 0 && this.renderSuggestionList()}
      </div>
    );
  }

  renderSuggestionList() {
    return (
      <ul>
        {this.props.relatedKeywords.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                this.handleClickItem(item);
              }}
              className="searchBox__item"
            >
              <span className="searchBox__itemKeyword">{item.keyword}</span>
              <span className="searchBox__itemQuantity">
                Abount {item.quantity} results
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SearchBox;
