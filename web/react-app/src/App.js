import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Travels } from "./components/travels";
import Travel from "./components/travels/Travel";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/travels" exact component={Travels} />
          <Route path="/travels/:id" component={Travel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
