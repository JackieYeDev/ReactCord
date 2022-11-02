import "../App.css";
import { Switch } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Dashboard />
      </Switch>
    </div>
  );
}

export default App;
