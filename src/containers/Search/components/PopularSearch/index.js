import React, { Component } from "react";
import "./style.css";

class PopularSearch extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="popularSearch">
        {data.map((item, index) => {
          return (
            <span
              className="popularSearch__item"
              onClick={() => {
                this.props.onClickItem(item);
              }}
              key={item.id}
            >
              {item.keyword}
            </span>
          );
        })}
      </div>
    );
  }
}

export default PopularSearch;
