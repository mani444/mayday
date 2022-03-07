import React from "react";

import "../../../containers/App.css";

const button = ({ icon, text, classes }) => {
  let inputElement = (
    <button className={classes}>
      {" "}
      {icon} {text}
    </button>
  );

  return inputElement;
};

export default button;
