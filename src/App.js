import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import axios from "axios";
import Filter from "./Components/Filter";
import CaseFile from "./Components/CaseFile";
import MakeArrest from "./Components/MakeArrest";
// import SearchCase from "./Components/SearchCase";
import Header from "./Components/Header";
// import DataBase from "./server/DataBase";
class App extends Component {
  constructor() {
    super();
    this.state = {
      LawAnd: "LAW AND",
      Order: "ORDER",
      unit: "Special Victims Unit",
      people: [],
      category: "",
      outcome_status: {
        category: ""
      },
      searchCrime: "",
      searchOutcome: "",
      id: 100000000000,
      newCase: [],
      defaultValue: ""
    };
    this.postRequest = this.postRequest.bind(this);
    this.invalid = this.invalid.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this);
  }
  componentWillMount() {
    axios.get(`/api/crimes`).then(response => {
      this.setState({ people: response.data });
      console.log(this.state.people);
    });
  }
  postRequest() {
    let { category, outcome_status, id } = this.state;
    axios.post(`/api/crimes`, { category, outcome_status, id }).then(res => {
      this.setState({ people: res.data, id: id + 1 });
    });
  }
  deleteRequest(id) {
    let { people } = this.state;
    axios.delete(`/api/crimes/${id}`).then(res => {
      this.setState({ people: res.data });
    });
    // console.log(people);
  }
  // putRequest() {
  //   let { people, id } = this.state;
  //   axios.put(`/api/crimes`).then(res => {
  //     this.setState({ people: res.data });
  //   });
  // }
  invalid() {
    return alert("Make a valid arrest");
  }
  render() {
    // console.log(this.state.people);
    var { people } = this.state;
    // console.log(people[100].category);
    var peopleMapped = people
      .filter(e => {
        return e.category
          .toUpperCase()
          .includes(this.state.searchCrime.toUpperCase());
      })
      .filter(e => {
        return e.outcome_status.category
          .toUpperCase()
          .includes(this.state.searchOutcome.toUpperCase());
      })
      .map(e => {
        let { id } = e;
        return (
          <CaseFile
            peopleProps={e.category}
            key={id}
            id={id}
            outcome={e.outcome_status.category}
            deleteRequest={this.deleteRequest}
            putRequest={this.putRequest}
          />
        );
      });
    return (
      <div className="home-page">
        <Header
          mainHeader={this.state.LawAnd}
          subHeader={this.state.Order}
          policeSquad={this.state.unit}
        />
        <section>
          <figure>
            <h4>Make an Arrrest</h4>
            <input
              type="text"
              placeholder="enter a crime"
              onChange={e => this.setState({ category: e.target.value })}
            />
            <input
              placeholder="enter outcome status"
              onChange={e =>
                this.setState({
                  outcome_status: { category: e.target.value }
                })
              }
            />
            <MakeArrest
              sendState={this.postRequest}
              categoryProp={this.state.category}
              outcomeProp={this.state.outcome_status.category}
              alertUser={this.invalid}
            />
          </figure>
          <figure>
            <h4>Search Case File</h4>
            <input
              placeholder="Search crime"
              onChange={e => this.setState({ searchCrime: e.target.value })}
            />
            <input
              placeholder="Search outcome status"
              onChange={e => this.setState({ searchOutcome: e.target.value })}
            />
          </figure>
        </section>
        <main>{peopleMapped}</main>
      </div>
    );
  }
}

export default App;
