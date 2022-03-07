import image from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";
import Button from "../UI/Button/Button";
import {
  faUserFriends,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const menu = () => {
  // let classes = classNames("btnContainer btn"); // => 'foo bar'
  const connected = <FontAwesomeIcon icon={faUserFriends} />;
  const exit = <FontAwesomeIcon icon={faRightFromBracket} />;

  return (
    <div className={styles.Menu}>
      <img src={image} height={100} width={100} alt="Hi" />
      <div>
        <Button
          classes={[styles.btnContainer, styles.btn].join(" ")}
          icon={connected}
          text=" 6 CONNECTED"
        />
        <Button classes={styles.btnContainer} icon={exit} text=" EXIT GAME" />
      </div>
    </div>
  );
};

export default menu;
