import { call } from "redux-saga/effects";
import { fetchUsers } from "./fetchUsers";

export function* locationChange(pathname: string) {
  if (pathname === "/pricing") {
    console.log("123");
    yield call(fetchUsers);
  }
}
