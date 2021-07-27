import { usersActions } from "../../actions";
import { apiActions } from "../../../api/actions";
import { makeRequest } from "../../../../workers";
import { api } from "../../../../api/index";
import { UsersType } from "../../types";

export function* fetchUsers(): Generator {
  const option = {
    fetcher: api.users.fetch,
    startFetching: apiActions.startLoading,
    stopFetching: apiActions.stopLoading,
    fill: usersActions.setUsers,
    setErrorAction: apiActions.setError
  };

  yield makeRequest<UsersType>(option);
}
