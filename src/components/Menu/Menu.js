import image from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";
import Button from "../UI/Button/Button";
import {
  faUserFriends,
  faRightFromBracket,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  // let classes = classNames("btnContainer btn"); // => 'foo bar'
  const connected = <FontAwesomeIcon icon={faUserFriends} />;
  const exit = <FontAwesomeIcon icon={faRightFromBracket} />;
  const help = <FontAwesomeIcon icon={faCircleQuestion} />;
  const location = useLocation();

  console.log("location", location.pathname);

  return (
    <div className={styles.Menu}>
      <img src={image} height={100} width={100} alt="Hi" />
      <div className={styles.Nav}>
        {location.pathname === "/finish" ? (
          <Button classes="btnContainer" icon={help} text=" HOW TO PLAY" />
        ) : (
          console.log("null")
        )}

        <Button
          classes="btnContainer btn"
          icon={connected}
          text=" 6 CONNECTED"
        />
        <Button classes="btnContainer" icon={exit} text=" EXIT GAME" />
      </div>
    </div>
  );
};

export default Menu;
