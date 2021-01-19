import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ErrorToast from "../../components/ErrorToast";
import { getError, actions as appActions } from "../../redux/modules/app";
import Home from "../Home";

class App extends React.Component {
  render() {
    const {
      error,
      appActions: { clearError },
    } = this.props;
    return (
      <div className="App">
        <Home />
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
