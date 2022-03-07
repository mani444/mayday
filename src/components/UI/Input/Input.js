import React from "react";

import "../../../containers/App.css";

const input = (props) => {
  let inputElement = (
    <input
      className={props.classes}
      type={props.type}
      placeholder={props.placeholder}
    />
  );

  return <div>{inputElement}</div>;
};

export default input;
