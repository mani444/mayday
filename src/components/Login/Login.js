import axios from "axios";

import Input from "../UI/Input/Input";
import "../../styles/variables/variables.scss";
import { useState, useContext } from "react";
import Button from "../UI/Button/Button";
import styles from "./Login.module.scss";
import { AuthContext } from "../../context/Auth/AuthContext";
import {
  // Link,
  useNavigate,
} from "react-router-dom";
const Login = () => {
  const authContext = useContext(AuthContext);
  let navigate = useNavigate();

  const [code, setCode] = useState({ name: "" });

  const handleInput = (event) => {
    // console.log(event.target.name);
    setCode({ ...code, name: event.target.value });
  };
  console.log(process.env.REACT_APP_ABC);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_ABC || "http://localhost:4000",
  });
  const checkLogin = () => {
    axiosInstance.post("/Login", code).then((res) => {
      // console.log(res.data);
      if (res.data.user) {
        console.log(res.data.message, res.data.user);

        authContext.authenticateUser();
        if (authContext.checkUser()) {
          console.log("authContext.checkUser()", authContext.checkUser());
          navigate("/start");
        }
      } else console.log(res.data.message);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit", code);
    checkLogin();
  };
  return (
    <div className={styles.container}>
      <h1>MAY DAY</h1>
      <span>Enter your game code below to get started</span>
      <form
        onSubmit={handleSubmit}
        className={styles["form-container"]}
        autoComplete="off"
      >
        <div className={styles["input-container"]}>
          <Input
            classes="input-field"
            type="text"
            placeholder="Game Code"
            onChange={handleInput}
          />{" "}
        </div>

        <Button
          classes="StartButtons login-button"
          icon={null}
          type="submit"
          text="LOG IN"
          //   onClick={() => checkLogin("/finish")}
        />
      </form>
    </div>
  );
};

export default Login;
