import React, { Component } from "react";
import './style.css';
class LoginForm extends Component {
  render() {
    return (
      <div className="loginForm">
        <div className="loginForm__inputContainer">
          <div className="loginForm__row">
            <label className="loginForm__mobileLabel">+1</label>
            <input className="loginForm__input" name="username"></input>
          </div>
          <div className="loginForm__row">
            <label className="loginForm__passwordLabel">password</label>
            <input
              className="loginForm__input"
              name="password"
              type="password"
            ></input>
          </div>
        </div>
        <div className="loginForm__btnContainer">
          <button className="loginForm__btn">Login</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
