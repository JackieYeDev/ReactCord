import "../App.css";
import { Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import { UserContext } from "../context/user";
import { useContext } from "react";

function App() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="App">
      <Switch>{user === null ? <LandingPage /> : <LandingPage />}</Switch>
    </div>
  );
}

export default App;
