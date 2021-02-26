import React, { Component } from "react";
import Header from "../../components/Header";
import Tip from "../../components/Tip";
import PurchaseForm from "./components/PurchaseForm";

class Purchase extends Component {
  render() {
    return (
      <div>
        <Header title="Purchase" onBack={this.backHander} />
        <PurchaseForm />
        <Tip message='Purchase succeed' clickHander={this.tipClickHandler} />
      </div>
    );
  }

  tipClickHandler = () => {}

  backHander = () => {
    this.props.history.goBack();
  };
}

export default Purchase;
