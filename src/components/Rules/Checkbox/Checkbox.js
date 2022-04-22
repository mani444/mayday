import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import styles from "./Checkbox.module.scss";

const Checkbox = ({ handleClick, ischecked }) => {
  const checkboxicon = <FontAwesomeIcon icon={faCheck} color="#00ff00" />;

  return (
    <div onClick={handleClick}>
      {/* <div> */}
      {ischecked ? <div> {checkboxicon}</div> : null}
    </div>
  );
};

export default Checkbox;
