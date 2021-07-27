import { SagaIterator } from "@redux-saga/core";
import { takeEvery,takeLatest, all, call, take, fork } from "redux-saga/effects";
import { FETCH_USER, FETCH_USERS, POST_POST } from "../types";
import { LOCATION_CHANGE } from "connected-react-router";

import { fetchUser, fetchUsers, locationChange,postThePost } from "./workers";

function* watchFetchUser(): SagaIterator {
  yield takeEvery(FETCH_USER, fetchUser);
}
function* watchFetchUsers(): SagaIterator {
  yield takeEvery(FETCH_USERS, fetchUsers);
}
function* watchPostMessage(): SagaIterator {
  yield takeLatest(POST_POST,postThePost)
}
function* watchLocation(): SagaIterator {
  while (true) {
    const locationAction = yield take(LOCATION_CHANGE);
    yield fork(locationChange, locationAction.payload.location.pathname);
  }
}
export function* watchUsers(): SagaIterator {
  yield all([call(watchFetchUser), call(watchFetchUsers), call(watchLocation),call(watchPostMessage)]);
}
