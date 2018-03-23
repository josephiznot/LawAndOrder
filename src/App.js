import React, { Component } from "react";
import "./reset.css";
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
    {
      /* <input onChange={e => this.handleChange(e.target.value)} />
    <Filter input={this.state.input} people={this.state.people} /> */
    }
    return (
      <div className="home-page">
        <header>{/* <h1 /> */}</header>
        <section>
          <figure>
            <h3>Commit a crime</h3>
            <input />
            <input />
            <button />
          </figure>
        </section>
        <main>
          <form>
            <h4 />
            <p />
            <button />
          </form>
          <form>
            <h4 />
            <p />
            <button />
          </form>
          <form>
            <h4 />
            <p />
            <button />
          </form>
          <form>
            <h4 />
            <p />
            <button />
          </form>
          <form>
            <h4 />
            <p />
            <button />
          </form>
          <form>
            <h4 />
            <p />
            <button />
          </form>
          <form>
            <h4 />
            <p />
            <button />
          </form>
          <form>
            <h4 />
            <p />
            <button />
          </form>
          <form>
            <h4 />
            <p />
            <button />
          </form>
          <form>
            <h4 />
            <p />
            <button />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
