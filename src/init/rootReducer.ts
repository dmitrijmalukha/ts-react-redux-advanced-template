import { combineReducers } from "redux";
import { apiReducer } from "../bus/api/apiReducer";
import { usersReducer } from "../bus/users/usersReducer";
import { history } from "./middlwares";
import { connectRouter } from "connected-react-router";

export const rootReducer = combineReducers({
  users: usersReducer,
  api: apiReducer,
  router: connectRouter(history)
});

export type AppStateType = ReturnType<typeof rootReducer>;
