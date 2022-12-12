import "../styles/App.css";
import { Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import { UserContext } from "../context/user";
import { useContext, useEffect } from "react";
import Home from "./Home";

function App() {
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {
    fetch("/me", {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((response) => {
            setUser(response);
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="main">
      <Switch>{user === null ? <LandingPage /> : <Home />}</Switch>
    </div>
  );
}

export default App;
