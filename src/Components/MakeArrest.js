import React, { Component } from "react";

function MakeArrest(props) {
  return (
    <figure>
      <h4>Make an Arrrest</h4>
      <input placeholder="enter a crime" />
      <input placeholder="enter outcome status" />
      <button>PROSECUTE</button>
    </figure>
  );
}
export default MakeArrest;
