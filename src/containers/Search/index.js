import React, { Component } from "react";
import PopularSearch from "./components/PopularSearch";
import SearchBox from "./components/SearchBox";
import SearchHistory from "./components/SearchHistory";

class Search extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <PopularSearch />
        <SearchHistory />
      </div>
    );
  }
}

export default Search;
