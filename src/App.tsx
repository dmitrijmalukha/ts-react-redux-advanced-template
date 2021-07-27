import { FC, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { useFetch } from "./hooks/useFetch";
import { usersActions } from "./bus/users/actions";
import { history } from "./init/middlwares";

export const App: FC = () => {

  const action = useMemo(() => usersActions.fetchUsers(), []);
  const {
    state: { state, error, fetching }
  } = useFetch(action, "users");

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div>TS/REACT-REDUX/Template</div>}
        />
      </Switch>
    </ConnectedRouter>
  );
};
