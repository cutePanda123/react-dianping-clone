import React, { Component } from "react";
import PopularSearch from "./components/PopularSearch";
import SearchBox from "./components/SearchBox";
import SearchHistory from "./components/SearchHistory";
import { bindActionCreators } from "redux";
import {
  actions as searchActions,
  getHistoryKeywords,
  getPopularKeywords,
  getRelatedKeywords,
  getInputText,
} from "../../redux/modules/search";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    const {
      inputText,
      relatedKeywords,
      popularKeywords,
      historyKeywords,
    } = this.props;
    return (
      <div>
        <SearchBox
          inputText={inputText}
          relatedKeywords={relatedKeywords}
          onInputChange={this.handleInputChange}
          onClear={this.handleInputClear}
          onCancel={this.handleCancel}
          onClickItem={this.handleClickItem}
        />
        <PopularSearch
          data={popularKeywords}
          onClickItem={this.handleClickItem}
        />
        <SearchHistory
          data={historyKeywords}
          onClickItem={this.handleClickItem}
          onClear={this.handleHistoryClear}
        />
      </div>
    );
  }

  componentDidMount() {
    this.props.searchActions.loadPopularKeywords();
  }

  componentWillUnmount() {
    this.props.searchActions.clearInputText();
  }

  handleInputChange = (text) => {
    this.props.searchActions.setInputText(text);
    this.props.searchActions.loadRelatedKeywords(text);
  };

  handleInputClear = () => {
    this.props.searchActions.clearInputText();
  };

  handleCancel = () => {
    this.handleInputClear();
    this.props.history.goBack();
  };

  handleClickItem = (item) => {
    this.props.searchActions.setInputText(item.keyword);
    this.props.searchActions.addHistoryKeyword(item.id);
    this.props.history.push('/search_result');
  };

  handleHistoryClear = () => {
    this.props.searchActions.clearHistoryKeywords();
  };
}

const mapStateToProps = (state, props) => {
  return {
    relatedKeywords: getRelatedKeywords(state),
    inputText: getInputText(state),
    popularKeywords: getPopularKeywords(state),
    historyKeywords: getHistoryKeywords(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
