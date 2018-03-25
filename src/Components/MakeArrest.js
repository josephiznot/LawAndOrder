import React, { Component } from "react";
export default function MakeArrest(props) {
  if (props.categoryProp === "" || props.outcomeProp === "") {
    return <button onClick={props.alertUser}>PROSECUTE</button>;
  }
  return <button onClick={props.sendState}>PROSECUTE</button>;
}
