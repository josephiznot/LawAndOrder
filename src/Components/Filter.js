import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { people, input } = this.props;
    let eachPerson = people
      .filter((element, index) => {
        return element.name.includes(input);
      })
      .map((element, index) => {
        return <li key={index}>{element.name}</li>;
      });
    return <ul>{eachPerson}</ul>;
  }
}
export default Filter;
