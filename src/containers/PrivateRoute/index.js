import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../redux/modules/login";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  render() {
    const { component: TargetComponent, isLogined, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          return isLogined ? (
            <TargetComponent {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        }}
      ></Route>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isLogined: isLogin(state),
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
