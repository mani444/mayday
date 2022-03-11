// import logo from "./logo.svg";
import "./App.css";
import TeamName from "../components/TeamName/TeamName";
import GetStarted from "./GetStarted/GetStarted";
import Menu from "../components/Menu/Menu";
function App() {
  console.log(process.env.REACT_APP_ABC);
  return (
    <div className="App">
      <div className="Container">
        <Menu />
        <TeamName />
        <br />
        <GetStarted />
      </div>
    </div>
  );
}

export default App;
