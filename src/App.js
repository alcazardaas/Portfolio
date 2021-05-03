import './App.css';
import './style/scss/main.scss';
import Schedule from './page/Schedule';
import SignIn from './page/SignIn';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from './page/Routes/Routes';
function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <PublicRoute
              path="/singin"
              component={SignIn}
            />
            <ProtectedRoute
              path="/schedules"
              component={Schedule}
            />
            <Redirect from="/" to="/singin" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
