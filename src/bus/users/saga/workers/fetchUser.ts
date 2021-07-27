import { usersActions } from "../../actions";
import { apiActions } from "../../../api/actions";
import { makeRequest } from "../../../../workers";
import { api } from "../../../../api/index";
import { OneUserType } from "../../types";
import { select } from "redux-saga/effects";

export function* fetchUser(param: {
  type: string;
  payload: string;
}): Generator {
  const option = {
    fetcher: api.user.fetch,
    fetcherParam: param.payload,
    startFetching: apiActions.startLoading,
    stopFetching: apiActions.stopLoading,
    fill: usersActions.setOneUser,
    setErrorAction: apiActions.setError
  };

  const response = yield makeRequest<OneUserType>(option);
  const store = yield select(s => s);
  console.log("store", store);
  console.log("fetchResponse", response);
}
