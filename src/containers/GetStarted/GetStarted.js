import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useMemo } from "react";
import {
  // Link,
  useNavigate,
} from "react-router-dom";

import styles from "./GetStarted.module.scss";

import Button from "../../components/UI/Button/Button";
import Rules from "../../components/Rules/Rules";
// import { useAuthContext } from "../../context/Auth/AuthContainer";
import { AuthContext } from "../../context/Auth/AuthContext";
const Getstarted = () => {
  const authContext = useContext(AuthContext);

  const rules = [
    {
      isChecked: false,
      rule: "All players in my team are logged in and ready to start",
    },
    {
      isChecked: false,
      rule: "All players in my team are on the same video call or are physically together",
    },
    {
      isChecked: false,
      rule: "I understand that pressing the Start Game button starts the game for everyone",
    },
  ];
  const back = <FontAwesomeIcon icon={faArrowLeft} />;
  const [checker, setCheckered] = useState(rules);
  let navigate = useNavigate();
  const handleChange = (index) => {
    authContext.authenticateUser();
    // console.log("authContext.isLogin", authContext.checkUser());

    const arr1 = [...checker];
    arr1[index].isChecked = !arr1[index].isChecked;
    setCheckered(arr1);
  };

  const checkLogin = (myroute) => {
    console.log("authContext.isLogin", authContext.isLogin);
    let path = myroute;
    authContext.isLogin && navigate(path);
  };

  const checkEnable = (check1) => {
    for (let i = 0; i < check1.length; i++) {
      if (!check1[i].isChecked) return false;
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
      <Rules key={rules[0]} rules={checker} handleClick={handleChange} />

      <div className={styles.StartArea}>
        <Button
          classes="StartButtons backbutton"
          icon={back}
          text="&nbsp; BACK"
          onClick={() => checkLogin("/finish")}
        />
        <Button
          classes={
            useMemo(() => checkEnable(checker), [checker])
              ? // checkRefEnable(checkboxes.current)
                "StartButtons startbuttonactive"
              : "StartButtons startbutton"
          }
          icon={null}
          text="START GAME"
          onClick={() => checkLogin("/finish")}
        />
      </div>
    </div>
  );
};

export default Getstarted;
