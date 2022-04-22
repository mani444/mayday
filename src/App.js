// import logo from "./logo.svg";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import TeamName from "./components/TeamName/TeamName";
import Login from "./components/Login/Login";

import GetStarted from "./containers/GetStarted/GetStarted";
import Menu from "./components/Menu/Menu";
import Finished from "./components/Finished/Finished";
import AuthContextContainer from "./context/Auth/AuthContainer";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
//import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
// import Slider from "./components/Slider/Slider";
function App() {
  console.log(process.env.REACT_APP_ABC);

  return (
    <div>
      {/* <Slider /> */}
      {/* <Menu /> */}
      <AuthContextContainer>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className={styles.Container3}>
                  <Login />
                </div>
              </>
            }
          />
          <Route
            path="start"
            element={
              <>
                <PrivateRoute>
                  <div className={styles.Container}>
                    <Menu />
                    <TeamName />
                    <br />
                    <GetStarted />
                  </div>
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="finish"
            element={
              <>
                <PrivateRoute>
                  <div className={styles.Container2}>
                    <Menu />
                    <Finished />
                    <br />
                  </div>
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="game"
            element={
              <>
                <div className={styles.Container2}>
                  <Menu />
                  <Finished />
                  <br />
                </div>
              </>
            }
          />
        </Routes>
      </AuthContextContainer>
    </div>
  );
}

export default App;

// const ProtectedRoute = ({ isLogin, children }) => {
//   console.log(isLogin);
//   if (!isLogin) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };
