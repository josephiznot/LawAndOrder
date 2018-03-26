import React, { Component } from "react";

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
    let { putRequest, id } = this.props;
    putRequest(id, categoryInput, outcome_statusInput);
    this.setState({ switchBtn: !switchBtn });
  }
  render() {
    const { outcome_status, category, id, deleteRequest } = this.props;
    const { switchBtn } = this.state;
    console.log(this.state.categoryInput);
    console.log(this.state.outcome_statusInput);
    return (
      <form>
        {switchBtn ? (
          <div>
            <h4>{category}</h4>
            <p>{outcome_status}</p>
            <button onClick={this.flipSwitch}>View Case File</button>
          </div>
        ) : (
          <div>
            <input
              defaultValue={category}
              onChange={e => this.setState({ categoryInput: e.target.value })}
            />
            <input
              defaultValue={outcome_status}
              onChange={e =>
                this.setState({ outcome_statusInput: e.target.value })
              }
            />
            <span>
              <button onClick={this.handleAppeal}>
                <p>Appeal</p>
              </button>
              <button onClick={() => deleteRequest(id)}>
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
