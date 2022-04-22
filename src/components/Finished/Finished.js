// import Input from "../UI/Input/Input";
import "../../styles/variables/variables.scss";
import { useState, useEffect } from "react";

import styles from "./Finished.module.scss";
import Info from "../Info/Info";
import Button from "../UI/Button/Button";
import ImgZoom from "../ImgZoom/ImgZoom";
import { secondsToTime } from "../../Utils/Utils";
const Finished = () => {
  const [timer, setTimer] = useState(5);
  const [popup, setPopup] = useState(false);

  const handleShowPopup = () => {
    // console.log("cliked ", popup);

    setPopup(!popup);
  };

  //secondsToTime(timer);
  useEffect(() => {
    // console.log("timer 12", timer);

    let myInterval = setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => timer - 1);
      }
      if (timer === 0) {
        // console.log("myInterval", timer);
        clearInterval(myInterval);
      }
    }, 1000);

    return () => {
      // console.log("myInterval2", timer);

      clearInterval(myInterval);
    };
  }, [timer]);

  return (
    <div className={styles.Topbox1}>
      <div className={styles.Menu}>
        <p>MAYDAY</p>
        <div className={styles.Info}>
          <Info text1={secondsToTime(timer)} text2="Remaining" classes="Red" />
          <Info text1="0" text2="incorrect" classes="Blue" />
          <Info text1="1" text2="hints used" classes="Blue" />
          {/* <div>{startTimer()}</div> */}
        </div>
      </div>
      <p style={{ color: "#7ED321" }}>BACK TO SAFETY</p>
      <p>
        That was one crazy adventure, but we made it off the island alive with
        Louis and the samples! I've just climbed aboard the tanker and the
        captain ensured me this ship can withstand any hurricane.
        <br />
        <br />
        It better be worth it, as I'll think twice before flying a plane again.
        If there's ever an emergency again, I'll definitely contact you.
      </p>
      <ImgZoom
        handleShowPopup={() => {
          handleShowPopup();
        }}
        popup={popup}
      />
      <p>
        Thanks for playing our online escape room. You've solved it in
        {"{MM:SS}"} mins, had {"{X}"} incorrect answers and needed {"{X}"}{" "}
        hints.
        <br />
        <br />
        We hope you had fun! Be sure to visit our website for more fun
        experiences.
      </p>
      <div className={styles.StartArea}>
        {[styles.App, styles.bold, styles["d-flex-c"]].join(" ")}
        <Button
          classes="StartButtons backbutton"
          icon={null}
          text="SHOW LEADERBOARD"
          myroute="/"
        />
        <Button
          classes={"StartButtons startbutton"}
          icon={null}
          text="EXIT GAME"
          myroute="/game"
        />
      </div>
    </div>
  );
};

export default Finished;
