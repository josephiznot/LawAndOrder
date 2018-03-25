import React, { Component } from "react";
class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header>
        <h1 className="blue">{this.props.mainHeader}</h1>
        <h1 className="red">{this.props.subHeader}</h1>
        <h3 className="orange">{this.props.policeSquad}</h3>
      </header>
    );
  }
}
export default Header;
