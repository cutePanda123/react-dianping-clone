import React, { Component } from "react";
import './style.css';

const suggestions = [
  {
    id: 1,
    keyword: "火锅",
    quantity: 8710,
  },
  {
    id: 2,
    keyword: "火锅自助",
    quantity: 541,
  },
  {
    id: 3,
    keyword: "火锅 三里屯",
    quantity: 65,
  },
  {
    id: 4,
    keyword: "火锅 望京",
    quantity: 133,
  },
  {
    id: 5,
    keyword: "火锅家常菜",
    quantity: 179,
  },
];

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }
  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      inputText: e.target.value,
    });
  };
  handleInputClear = () => {
    this.setState({
      inputText: "",
    });
  };

  handleInputCancel = () => {}
  render() {
    return (
      <div className="searchBox">
        <div className="searchBox__container">
          <input
            className="searchBox__text"
            value={this.state.inputText}
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
        {this.state.inputText.length > 0 && this.renderSuggestionList()}
      </div>
    );
  }

  renderSuggestionList() {
    return (
      <ul>
        {suggestions.map((suggestion, index) => {
          return (
            <li key={index} className="searchBox__item">
              <span className="searchBox__itemKeyword">
                {suggestion.keyword}
              </span>
              <span className="searchBox__itemQuantity">
                Abount {suggestion.quantity} results
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SearchBox;
