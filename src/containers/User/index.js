import React, { Component } from "react";
import UserHeader from "./components/UserHeader";
import UserMain from "./components/UserMain";

class User extends Component {
  render() {
    return (
      <div>
        <UserHeader onBack={this.backHandler} onLogout={this.logoutHandler} />
        <UserMain />
      </div>
    );
  }

  backHandler = () => {};
  logoutHandler = () => {};
}

export default User;
