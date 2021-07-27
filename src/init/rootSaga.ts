import { all, spawn, call } from "redux-saga/effects";
import { watchUsers } from "../bus/users/saga";

export function* rootSaga(): Generator {
  const sagasArr = [watchUsers];

  const retrySagas = sagasArr.map(saga => {
    return spawn(function*() {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  });

  yield all(retrySagas);
}
