import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/Auth/AuthContext";
// interface PrivateRouteProps extends RouteProps {
//   currentScreen?: EGameScreen;
//   component: any;
// }

// const PrivateRoute = () => {
const PrivateRoute = ({ children }) => {
  const authValues = useContext(AuthContext);
  if (!authValues.checkUser()) {
    return <Navigate to="/" replace />;
  }

  return children;
  // (
  //   <div></div>
  // <Route
  //   {...rest}
  //   render={(props) =>
  //     authValues.checkUser() ? (
  //       <Component {...props} />
  //     ) : (
  //       <Navigate to={"/"} />
  //     )
  //   }
  // />
  // );
};

export default PrivateRoute;
