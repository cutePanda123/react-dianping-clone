import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ErrorToast from "../../components/ErrorToast";
import { getError, actions as appActions } from "../../redux/modules/app";
import Home from "../Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import Search from "../Search";
import SearchResult from "../SearchResult";
import Login from "../Login";
import PrivateRoute from "../PrivateRoute";
import User from "../User";
import Purchase from "../Purchase";

class App extends React.Component {
  render() {
    const {
      error,
      appActions: { clearError },
    } = this.props;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/user" component={User} />
            <Route path="/detail/:id" component={ProductDetail} />
            <Route path="/search" component={Search} />
            <Route path="/search_result" component={SearchResult} />
            <PrivateRoute path="/purchase/:id" component={Purchase} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        {error ? (
          <ErrorToast msg={error} clearErrorHandler={clearError} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    error: getError(state),
  };
};

const mapDispatchTopProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(App);
