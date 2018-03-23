import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Filter from "./Components/Filter";
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      // baseUrl: "https://swapi.co/api/",
      baseUrl: "https://data.police.uk/api/crime-categories",
      input: ""
    };
  }
  componentWillMount() {
    let { baseUrl } = this.state;
    axios.get(`${baseUrl}`).then(response => {
      this.setState({ people: response.data });
    });
  }
  handleChange(e) {
    this.setState({ input: e });
  }
  render() {
    console.log(this.state.people);
    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)} />
        <Filter
          input={this.state.input}
          people={this.state.people}
          className={"App"}
        />
      </div>
    );
  }
}

export default App;
