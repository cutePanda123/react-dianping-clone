import React, { Component } from "react";
import OrderItem from '../OrderItem';
import './style.css';
const tabTitles = ["All Orders", "Unpaid", "Paid", "Return/Refund"];
const data = [
  {
    id: "o-2",
    statusText: "已消费",
    orderPicUrl:
      "https://p1.meituan.net/deal/95e79382c20a78da3068c4207ab7a9b4329494.jpg.webp@700w_700h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20",
    channel: "团购",
    title: "华莱士：华莱士单人套餐",
    text: ["1张 | 总价：￥11.99", "有效期至2018-09-17"],
    type: 1,
  },
];

class UserMain extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: 0 };
  }
  render() {
    const { currentTab } = this.state;
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
                    currentTab === index
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
    this.setState({
      currentTab: index,
    });
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
      return <OrderItem key={item.id} data={item} />;
    });
  };
}

export default UserMain;
