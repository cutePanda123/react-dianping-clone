import React, { Component } from "react";
import "./style.css";

const searches = [
  "三里屯",
  "朝阳大悦城",
  "西单",
  "海底捞",
  "星巴克",
  "局气",
  "火锅",
  "温泉",
  "烤鸭",
];

class PopularSearch extends Component {
  render() {
    return (
      <div className="popularSearch">
        {searches.map((search, index) => {
          return (
            <span className="popularSearch__item" key={index}>
              {search}
            </span>
          );
        })}
      </div>
    );
  }
}

export default PopularSearch;
