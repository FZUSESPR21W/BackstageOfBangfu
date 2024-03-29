import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteAuth from "./router/RouteAuth";
import Layout from "./layouts/layout/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Switch>
            <RouteAuth />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
