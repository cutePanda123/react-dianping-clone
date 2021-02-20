import React, { Component } from "react";
import OrderItem from "../../components/OrderItem";
import "./style.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  actions as userActions,
  getCurrentTabIndex,
  getDeletingOrderId,
} from "../../../../redux/modules/user";
import Confirmation from "../../../../components/Confirmation";

const tabTitles = ["All Orders", "Unpaid", "Paid", "Return/Refund"];

class UserMain extends Component {
  render() {
    const { currentTabIndex, data, deletingOrderId } = this.props;
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
        {deletingOrderId && this.renderConfirmDialog()}
      </div>
    );
  }

  tabClickHandler = (index) => {
    this.props.userActions.setCurrentTabIndex(index);
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
      return (
        <OrderItem
          key={item.id}
          data={item}
          onRemove={this.removeHandler.bind(this, item.id)}
        />
      );
    });
  };

  removeHandler = (orderId) => {
    this.props.userActions.showDeleteDialog(orderId);
  };

  renderConfirmDialog = () => {
    const {
      userActions: { hideDeletDialog, removeOrder },
    } = this.props;
    return (
      <Confirmation
        content="Please confirm order deleting."
        cancelText="Cancel"
        confirmText="Confirm"
        onCancle={hideDeletDialog}
        onConfirm={removeOrder}
      />
    );
  };
}

const mapStateToProps = (state, props) => {
  return {
    currentTabIndex: getCurrentTabIndex(state),
    deletingOrderId: getDeletingOrderId(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMain);
