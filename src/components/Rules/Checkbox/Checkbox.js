import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../../containers/App.css";

const Checkbox = (props) => {
  const checkboxicon = <FontAwesomeIcon icon={faCheck} color="#00ff00" />;

  return (
    <div onClick={props.handleClick}>
      {/* <div> */}
      {props.ischecked ? <div> {checkboxicon}</div> : null}
    </div>
  );
};

export default Checkbox;
