import React, { useState } from "react";
import { AuthProvider } from "./AuthContext";
// import { withRouter } from "react-router";
import { defaultAuthContext } from "./AuthInterface";

const AuthContextContainer = ({ history, children }) => {
  const [state, setState] = useState(defaultAuthContext);
  const checkUser = () => {
    // console.log("aaahahaah", state.isLogin);
    return !!localStorage.getItem("TOKEN");
    // return state.isLogin;
  };

  const authenticateUser = () => {
    // console.log("aaahahaah");
    localStorage.setItem("TOKEN", "dfsdfda");
    setState((prev) => {
      return {
        ...prev,
        isLogin: true,
      };
    });
  };

  return (
    <AuthProvider
      value={{
        isLogin: state.isLogin,
        authenticateUser,
        checkUser,
      }}
    >
      {children}
    </AuthProvider>
  );
};

export default AuthContextContainer;
