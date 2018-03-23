import React, { Component } from "react";
class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header>
        <h1>{this.props.mainHeader}</h1>
        <h3>{this.props.policeSquad}</h3>
      </header>
    );
  }
}
export default Header;
