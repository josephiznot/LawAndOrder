import React, { Component } from "react";

class CaseFile extends Component {
  constructor() {
    super();
    this.state = {
      switchBtn: true
    };
    this.flipSwitch = this.flipSwitch.bind(this);
  }
  flipSwitch() {
    this.setState({ switchBtn: !this.state.switchBtn });
  }
  render() {
    const { switchBtn, id } = this.state;
    const { putRequest, deleteRequest, outcome, peopleProps } = this.props;
    return (
      <form>
        {switchBtn ? (
          <div>
            <h4>{peopleProps}</h4>
            <p>{outcome}</p>
            <button onClick={this.flipSwitch}>View Case File</button>
          </div>
        ) : (
          // <div>
          //   <h4>{peopleProps}</h4>
          //   <p>{outcome}</p>
          //   <button onClick={this.flipSwitch}>Edit</button>
          // </div>
          <div>
            <h4>{peopleProps}</h4>
            <p>{outcome}</p>
            <span>
              <button onClick={putRequest}>
                <p>Prosecute</p>
              </button>
              <button onClick={deleteRequest}>
                <p>Acquit</p>
              </button>
              <button onClick={this.flipSwitch}>
                <p>Cancel</p>
              </button>
            </span>
          </div>
        )}
      </form>
    );
  }
}
export default CaseFile;
