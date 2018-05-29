import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import axios from "axios";
import CaseFile from "./Components/CaseFile";
import MakeArrest from "./Components/MakeArrest";
import Header from "./Components/Header";
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      category: "",
      outcome_status: {
        category: ""
      },
      searchCrime: "",
      searchOutcome: "",
      newCase: [],
      defaultValue: ""
    };
  }
  componentWillMount() {
    axios.get(`/api/crimes`).then(response => {
      this.setState({ people: response.data });
    });
  }
  postRequest = () => {
    let { category, outcome_status } = this.state;
    axios.post(`/api/crimes`, { category, outcome_status }).then(res => {
      this.setState({
        people: res.data,
        category: "",
        outcome_status: { category: "" }
      });
    });
  };
  deleteRequest = id => {
    axios.delete(`/api/crimes/${id}`).then(res => {
      this.setState({ people: res.data });
    });
  };
  putRequest = (id, categoryInput, outcome_statusInput) => {
    // let { category, outcome_status } = this.state;
    axios
      .put(`/api/crimes/${id}`, { categoryInput, outcome_statusInput })
      .then(res => {
        this.setState({ people: res.data });
      });
  };
  invalid = () => {
    return alert("Make a valid arrest");
  };
  render() {
    var { people } = this.state;
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
      .map((e, ind) => {
        let { id } = e;
        return (
          <CaseFile
            category={e.category}
            key={ind}
            id={id}
            outcome_status={e.outcome_status.category}
            deleteRequest={this.deleteRequest}
            putRequest={this.putRequest}
          />
        );
      });
    return (
      <div className="home-page">
        <header>
          <Header mainHeader={"LAW AND"} color="blue" />
          <Header mainHeader={"ORDER"} color="red" />
          {/* <Header mainHeader={"Special Victims Unit"} color="orange" /> */}
        </header>
        <section>
          {/* {this.state. */}
          <figure>
            <h4>Make an Arrrest</h4>
            <input
              type="text"
              placeholder="enter a crime"
              value={this.state.category}
              onChange={e => this.setState({ category: e.target.value })}
            />
            <input
              placeholder="enter outcome status"
              value={this.state.outcome_status.category}
              onChange={e =>
                this.setState({
                  outcome_status: { category: e.target.value }
                })
              }
            />
            <MakeArrest
              postRequest={this.postRequest}
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
          {/* } */}
        </section>
        <main>{peopleMapped}</main>
        <footer>&copy; COPYRIGHT JOE ANDY 2018</footer>
      </div>
    );
  }
}

export default App;
