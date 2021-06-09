import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteAuth from "./router/RouteAuth";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <RouteAuth />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
