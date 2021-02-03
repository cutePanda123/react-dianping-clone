import React, { Component } from "react";
import "./style.css";

class SearchHistory extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="searchHistory">
        <div className="searchHistory__header">Search History</div>
        <ul className="searchHistory__list">
          {data.map((item, index) => {
            return (
              <li
                onClick={() => {
                  this.props.onClickItem(item);
                }}
                className="searchHistory__item"
                key={item.id}
              >
                {item.keyword}
              </li>
            );
          })}
        </ul>
        <div
          className="searchHistory__clear"
          onClick={() => {
            this.props.onClear();
          }}
        >
          Clear History
        </div>
      </div>
    );
  }
}

export default SearchHistory;
