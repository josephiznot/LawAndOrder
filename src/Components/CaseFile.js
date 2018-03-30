import React, { Component } from "react";
// import LandingCaseFile from "./LandingCaseFile";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

class CaseFile extends Component {
  constructor() {
    super();
    this.state = {
      switchBtn: true,
      categoryInput: "",
      outcome_statusInput: ""
    };
    this.flipSwitch = this.flipSwitch.bind(this);
    this.handleAppeal = this.handleAppeal.bind(this);
  }
  flipSwitch() {
    this.setState({ switchBtn: !this.state.switchBtn });
  }
  handleAppeal() {
    let { switchBtn, categoryInput, outcome_statusInput } = this.state;
    let { putRequest, id, category, outcome_status } = this.props;
    if (categoryInput === "" && outcome_statusInput === "") {
      putRequest(id, category, outcome_status);
      this.setState({ switchBtn: !switchBtn });
    } else if (categoryInput === "" && outcome_statusInput !== "") {
      putRequest(id, category, outcome_statusInput);
      this.setState({ switchBtn: !switchBtn });
    } else if (categoryInput !== "" && outcome_statusInput === "") {
      putRequest(id, categoryInput, outcome_status);
      this.setState({ switchBtn: !switchBtn });
    } else {
      putRequest(id, categoryInput, outcome_statusInput);
      this.setState({ switchBtn: !switchBtn });
    }
  }
  // handleAppeal(){
  //   let{id, deleteRequest}= this.props;

  // }
  render() {
    const { outcome_status, category, id, deleteRequest } = this.props;
    const { switchBtn } = this.state;
    return (
      //------------------ROUTING ADDED BELOW-------------------------

      <form>
        <h4>{category}</h4>
        <p>{outcome_status}</p>
        <Link to="">
          <button>View Case File</button>
        </Link>
      </form>

      //------------------ROUTING ADDED ABOVE-------------------------
      //
      //------------------CONDITIONAL RENDERING BELOW-----------------
      //
      // <div className="condition1">
      //   {switchBtn ? (
      //     <form>
      //       <h4>{category}</h4>
      //       <p>{outcome_status}</p>
      //       <button onClick={this.flipSwitch}>View Case File</button>
      //     </form>
      //   ) : (
      //     <form>
      //       <input
      //         defaultValue={category}
      //         onChange={e => this.setState({ categoryInput: e.target.value })}
      //       />
      //       <input
      //         defaultValue={outcome_status}
      //         onChange={e =>
      //           this.setState({ outcome_statusInput: e.target.value })
      //         }
      //       />
      //       <span>
      //         <button onClick={this.handleAppeal}>
      //           <p>Appeal</p>
      //         </button>
      //         <button
      //           onClick={e => {
      //             e.preventDefault();
      //             deleteRequest(id);
      //             this.setState({ switchBtn: !this.state.switchBtn });
      //           }}
      //         >
      //           <p>Acquit</p>
      //         </button>
      //         <button onClick={this.flipSwitch}>
      //           <p>Cancel</p>
      //         </button>
      //       </span>
      //     </form>
      //   )}
      // </div>
      //
      //------------------CONDITIONAL RENDERING ABOVE-----------------
    );
  }
}
export default CaseFile;
