import React, { Component } from "react";
import OrderItem from '../OrderItem';
import './style.css';
const tabTitles = ["All Orders", "Unpaid", "Paid", "Return/Refund"];

class UserMain extends Component {
  render() {
    const { currentTabIndex, data } = this.props;
    return (
      <div className="userMain">
        <div className="userMain__menu">
          {tabTitles.map((item, index) => {
            return (
              <div
                key={index}
                className="userMain__tab"
                onClick={this.tabClickHandler.bind(this, index)}
              >
                <span
                  className={
                    currentTabIndex === index
                      ? "userMain__title userMain__title--active"
                      : "userMain__title"
                  }
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>
        <div className="userMain__content">
          {data && data.length > 0
            ? this.renderOrderList(data)
            : this.renderEmptyOrderList()}
        </div>
      </div>
    );
  }

  tabClickHandler = (index) => {
    this.props.onSetCurrentTab(index);
  };

  renderEmptyOrderList = () => {
    return (
      <div>
        <div className="userMain__emptyIcon" />
        <div className="userMain__emptyText1">You have no orders</div>
        <div className="userMain__emptyText2">
          Find some deals and submit an order
        </div>
      </div>
    );
  };

  renderOrderList = (data) => {
    return data.map((item) => {
      return <OrderItem key={item.id} data={item} onRemove={this.removeHandler}/>;
    });
  };

  removeHandler = () => {}
}

export default UserMain;
