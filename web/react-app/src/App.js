import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/header";
import { Travels } from "./components/travels";
import Travel from "./components/travels/Travel";
import { authenticationService } from "./services/authentication.service";
import Login from "./components/login/Login";
import Profile from "./components/profile";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const history = useHistory();

  useEffect(() => {
    authenticationService.currentUser.subscribe((user) => setCurrentUser(user));
  }, [currentUser]);

  return (
    <Router history={history}>
      <div>
        <Header currentUser={currentUser} />

        <Switch>
          <Route path="/travels" exact component={Travels} />
          <Route path="/travels/:id" component={Travel} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
