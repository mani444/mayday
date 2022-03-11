import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo, useRef } from "react";
import styles from "./GetStarted.module.scss";

import Button from "../../components/UI/Button/Button";
// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];

// const strings = ["10", "10", "10"];
// const numbers = strings.map((str) => {
//   return parseInt(str);
// });

// console.log(numbers);
// const reformattedArray = kvArray.map((key) => {
//   console.log(key.key);
//   return key.value;
// });

// console.log("reformattedArray " + reformattedArray);

const Getstarted = () => {
  const back = <FontAwesomeIcon icon={faArrowLeft} />;
  const checkbox = <FontAwesomeIcon icon={faCheck} color="#00ff00" />;
  const [check, setChecked] = useState([false, false, false]);
  const checkboxes = useRef([false, false, false]);

  const handleChange = (index) => {
    const arr = [...check];
    arr[index] = !arr[index];
    setChecked(arr);
  };
  const handleRefChange = (index) => {
    checkboxes.current[index] = !checkboxes.current[index];
    console.log("checkboxes.current[index]", checkboxes.current[index]);
  };

  // const checkRefEnable = (check1) => {
  //   console.log("val ", check1);

  //   for (let i = 0; i < check1.length; i++) {
  //     if (!check1[i]) return false;
  //   }

  //   return true;
  // };

  const checkEnable = (check1) => {
    // console.log("val ", check1);

    for (let i = 0; i < check1.length; i++) {
      if (!check1[i]) return false;
    }

    return true;
  };
  return (
    <div className={styles.Topbox}>
      {}

      <h4>GET STARTED</h4>
      <p>
        Make sure you've set up a video call and everyone has joined, in case
        you're not physically together. You can use Zoom, Teams, The Pub Hub or
        any other tool you'd like.
        <br />
        <br />
        When all players are ready, any player can check all the checkboxes and
        press the Start Game button. This will start the game for everyone.
      </p>
      <div className={styles.Rules}>
        <div
          onClick={() => {
            handleChange(0);
            handleRefChange(0);
          }}
        >
          {check[0] ? <div> {checkbox}</div> : null}
        </div>
        <label>All players in my team are logged in and ready to start</label>
        <br />
        <br />
        <div
          onClick={() => {
            handleChange(1);
            handleRefChange(1);
          }}
        >
          {check[1] ? <div> {checkbox}</div> : null}
        </div>
        <label>
          All players in my team are on the same video call or are physically
          together
        </label>
        <br />
        <br />
        <div
          onClick={() => {
            handleChange(2);
            handleRefChange(2);
          }}
        >
          {check[2] ? <div> {checkbox}</div> : null}
        </div>
        <label>
          I understand that pressing the Start Game button starts the game for
          everyone
        </label>
      </div>
      <div></div>
      <div className="StartArea">
        <Button
          classes="StartButtons backbutton"
          icon={back}
          text="&nbsp; BACK"
        />
        <Button
          classes={
            useMemo(() => checkEnable(check), [check])
              ? // checkRefEnable(checkboxes.current)
                "StartButtons startbuttonactive"
              : "StartButtons startbutton"
          }
          icon={null}
          text="START GAME"
        />
      </div>
    </div>
  );
};

export default Getstarted;
