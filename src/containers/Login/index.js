import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import {
  getPassword,
  getUsername,
  isLogin,
  actions as loginActions,
} from "../../redux/modules/login";
import LoginForm from "./components/LoginForm";
import LoginHeader from "./components/LoginHeader";

class Login extends Component {
  render() {
    const { username, password, isLogined } = this.props;
    return (
      <>
        {isLogined ? (
          <Redirect to="/user" />
        ) : (
          <div>
            <LoginHeader />
            <LoginForm
              username={username}
              password={password}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>
        )}
      </>
    );
  }

  handleChange = (e) => {
    if (e.target.name === "username") {
      this.props.loginActions.setUsername(e.target.value);
    } else if (e.target.name === "password") {
      this.props.loginActions.setPassword(e.target.value);
    }
  };

  handleSubmit = () => {
    this.props.loginActions.login();
  };
}

const mapStateToProps = (state, props) => {
  return {
    username: getUsername(state),
    password: getPassword(state),
    isLogined: isLogin(state),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
