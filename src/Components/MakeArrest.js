import React from "react";
export default function MakeArrest(props) {
  if (props.categoryProp === "" || props.outcomeProp === "") {
    return <button onClick={props.alertUser}>PROSECUTE</button>;
  }
  return <button onClick={props.postRequest}>PROSECUTE</button>;
}
