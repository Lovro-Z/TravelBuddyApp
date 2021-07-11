import { Route, Switch, useRouteMatch } from "react-router-dom";

import TravelsList from "./TravelsList";
import Travel from "./Travel";

export const Travels = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path} exact component={TravelsList} />
      <Route path={`${match.path}/:id`} component={Travel} />
    </Switch>
  );
};
