import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import axios from "axios";
import Filter from "./Components/Filter";
import CaseFile from "./Components/CaseFile";
import MakeArrest from "./Components/MakeArrest";
import SearchCase from "./Components/SearchCase";
import Header from "./Components/Header";
class App extends Component {
  constructor() {
    super();
    this.state = {
      header: "LAW AND ORDER",
      unit: "Special Victims Unit",
      people: [],
      // baseUrl: "https://swapi.co/api/",
      baseUrl:
        "https://data.police.uk/api/crimes-no-location?category=all-crime&force=leicestershire",
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
    {
      /* <input onChange={e => this.handleChange(e.target.value)} />
    <Filter input={this.state.input} people={this.state.people} /> */
    }
    return (
      <div className="home-page">
        <Header mainHeader={this.state.header} policeSquad={this.state.unit} />
        <section>
          <MakeArrest />
          <SearchCase />
        </section>
        <main>
          <CaseFile />
          <CaseFile />
          <CaseFile />
          <CaseFile />
          <CaseFile />
          <CaseFile />
          <CaseFile />
          <CaseFile />
          <CaseFile />
          <CaseFile />
        </main>
      </div>
    );
  }
}

export default App;
