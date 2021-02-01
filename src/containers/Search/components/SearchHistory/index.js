import React, { Component } from "react";
import "./style.css";

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historys: ["烤鸭", "火锅", "面条"],
    };
  }
  render() {
    return (
      <div className="searchHistory">
        <div className="searchHistory__header">Search History</div>
        <ul className="searchHistory__list">
          {this.state.historys.map((history, index) => {
            return (
              <li
                onClick={this.handleClick}
                className="searchHistory__item"
                key={index}
              >
                {history}
              </li>
            );
          })}
        </ul>
        <div className="searchHistory__clear" onClick={this.handleClear}>
          Clear History
        </div>
      </div>
    );
  }

  handleClear = () => {
    this.setState({
      historys: [],
    });
  };

  handleClick = () => {};
}

export default SearchHistory;
