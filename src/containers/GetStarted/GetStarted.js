import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./GetStarted.module.scss";

import Button from "../../components/UI/Button/Button";

const Getstarted = () => {
  const back = <FontAwesomeIcon icon={faArrowLeft} />;
  const checkbox = <FontAwesomeIcon icon={faCheck} color="#00ff00" />;
  // const [count, setCount] = useState(0);
  const [check, setChecked] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
  });
  console.log(check.checked1);
  console.log(check.checked2);

  console.log(check.checked3);
  for (let checked in check) {
    const item = check[checked];
    console.log(item);
  }
  return (
    <div className={styles.Topbox}>
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
            setChecked((prevState) => ({
              ...prevState,
              checked1: !check.checked1,
            }));
          }}
        >
          {check.checked1 ? <div> {checkbox}</div> : null}
        </div>
        <label>All players in my team are logged in and ready to start</label>
        <br />
        <br />
        <div
          onClick={() => {
            setChecked((prevState) => ({
              ...prevState,
              checked2: !check.checked2,
            }));
          }}
        >
          {check.checked2 ? <div> {checkbox}</div> : null}
        </div>
        <label>
          All players in my team are on the same video call or are physically
          together
        </label>
        <br />
        <br />
        <div
          onClick={() => {
            setChecked((prevState) => ({
              ...prevState,
              checked3: !check.checked3,
            }));
          }}
        >
          {check.checked3 ? <div> {checkbox}</div> : null}
        </div>
        <label>
          I understand that pressing the Start Game button starts the game for
          everyone
        </label>
      </div>

      <div className="StartArea">
        <Button
          classes="StartButtons backbutton"
          icon={back}
          text="&nbsp; BACK"
        />
        <Button
          classes={
            check.checked1 && check.checked2 && check.checked3
              ? "StartButtons startbuttonactive"
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
