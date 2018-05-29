import React from "react";
function Header(props) {
  return <h1 className={props.color}>{props.mainHeader}</h1>;
}
export default Header;
