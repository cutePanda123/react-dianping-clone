import React, { Component } from "react";
import Header from "../../components/Header";

class Purchase extends Component {
  render() {
    return (
      <div>
        <Header title="Purchase" onBack={this.backHander} />
      </div>
    );
  }

  backHander = () => {
    this.props.history.goBack();
  };
}

export default Purchase;
