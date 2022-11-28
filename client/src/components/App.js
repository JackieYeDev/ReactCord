import "../styles/App.css";
import { Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import { UserContext } from "../context/user";
import { useContext } from "react";
import Home from "./Home";

function App() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="main">
      <Switch>{user === null ? <LandingPage /> : <Home />}</Switch>
    </div>
  );
}

export default App;
