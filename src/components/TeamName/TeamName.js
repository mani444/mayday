import Input from "../UI/Input/Input";
import "../../styles/variables/variables.scss";

import styles from "./TeamName.module.scss";
const teamname = () => {
  return (
    <div className={styles.Topbox1}>
      <h4>TEAM NAME</h4>
      <p>
        Now make sure you come up with a catchy team name that's between 5 and
        15 characters. This is also shown on the leaderboard, if you make it.{" "}
        <br />
        <br />
        Only one person in your team needs to enter the team name. Once you
        start the game, the team name can no longer be changed.
      </p>
      <Input
        classes="InputTeamName"
        type="text"
        placeholder="Enter Your Team Name"
      />{" "}
    </div>
  );
};

export default teamname;
