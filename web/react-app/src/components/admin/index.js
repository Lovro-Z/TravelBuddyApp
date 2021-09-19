import { Route, Switch, useRouteMatch } from "react-router-dom";

import CreateTravel from "./CreateTravel";
import EditTravel from "./EditTravel";

export const Admin = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/new`} exact component={CreateTravel} />
      <Route path={`${match.path}/:id`} component={EditTravel} />
    </Switch>
  );
};
