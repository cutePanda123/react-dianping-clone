import React, { Component } from "react";
import FavoriteItem from "../FavoriteItem";
import Loading from "../../../../components/Loading";

const MAX_PAGE_NUM = 3;
class FavoriteList extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.isRevmovedListener = false;
  }

  render() {
    const { data, pageIndex } = this.props;
    return (
      <div className="favoriteList">
        <div className="favoriteList__header">Guess you like</div>
        <div className="favoriteList__list" ref={this.listRef}>
          {data.map((favorite, index) => {
            return <FavoriteItem key={index} data={favorite} />;
          })}
        </div>
        {pageIndex < MAX_PAGE_NUM ? (
          <Loading />
        ) : (
          <a className="favoriteList__viewAll">View all</a>
        )}
      </div>
    );
  }

  componentDidMount() {
    if (this.props.pageIndex < MAX_PAGE_NUM) {
      document.addEventListener("scroll", this.handleScroll);
    } else {
      this.isRevmovedListener = true;
    }
    if (this.props.pageIndex === 0) {
      this.props.fetchData();
    }
  }

  componentDidUpdate() {
    if (!this.isRevmovedListener && this.props.pageIndex >= MAX_PAGE_NUM) {
      document.removeEventListener("scroll", this.handleScroll);
      this.isRevmovedListener = true;
    }
  }

  componentWillUnmount() {
    if (!this.isRevmovedListener) {
      document.removeEventListener("scroll", this.handleScroll);
      this.isRevmovedListener = true;
    }
  }

  handleScroll = () => {
    const currentScrollOffset =
      document.documentElement.scrollTop || document.body.scrollTop;
    const screenHeight = document.documentElement.clientHeight;
    const currentDomOffset = this.listRef.current.offsetTop;
    const currentDomHeight = this.listRef.current.offsetHeight;
    if (
      currentScrollOffset >=
      currentDomHeight + currentDomOffset - screenHeight
    ) {
      this.props.fetchData();
    }
  };
}

export default FavoriteList;
