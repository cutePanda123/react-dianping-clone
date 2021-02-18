import React, { Component } from "react";
import UserHeader from "./components/UserHeader";
import UserMain from "./components/UserMain";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  actions as userActions,
  getOrders,
  getCurrentTabIndex,
} from "../../redux/modules/user";
import { actions as loginActions } from "../../redux/modules/login";

class User extends Component {
  render() {
    const { currentTabIndex, orders } = this.props;
    return (
      <div>
        <UserHeader onBack={this.backHandler} onLogout={this.logoutHandler} />
        <UserMain
          currentTabIndex={currentTabIndex}
          data={orders}
          onSetCurrentTab={this.handleSetCurrentTab}
        />
      </div>
    );
  }

  componentDidMount() {
    this.props.userActions.loadOrders();
  }

  backHandler = () => {
    this.props.history.push('/');
  };
  logoutHandler = () => {
    this.props.loginActions.logout();
  };

  handleSetCurrentTab = (index) => {
    this.props.userActions.setCurrentTabIndex(index);
  }
}

const mapStateToProps = (state, props) => {
  return {
    orders: getOrders(state),
    currentTabIndex: getCurrentTabIndex(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    loginActions: bindActionCreators(loginActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
