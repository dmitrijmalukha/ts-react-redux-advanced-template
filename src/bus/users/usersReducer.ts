import { InferActionsType } from "../../types/inferActionsType";
import { UsersActionsType } from "./actions";
import {
  SET_USERS,
  SET_ONE_USER,
  FETCH_USER,
  FETCH_USERS,
  POST_POST,
  SET_POST
} from "./types";
import { user } from "./constants";

const initialState = {
  user: {
    ...user
  },
  users: [{ ...user }],
  post: {
    title: "foo",
    body: "bar",
    userId: 1
  }
};

type UsersStateType = typeof initialState;
export type UsersActionReturnType = InferActionsType<UsersActionsType>;

export const usersReducer = (
  state = initialState,
  action: UsersActionReturnType
): UsersStateType => {
  switch (action.type) {
    case SET_ONE_USER: {
      return { ...state, user: action.payload };
    }
    case SET_USERS: {
      return { ...state, users: action.payload.results };
    }
    case FETCH_USER: {
      return state;
    }
    case FETCH_USERS: {
      return state;
    }
    case POST_POST: {
      return state;
    }
    case SET_POST: {
      return { ...state, post: action.payload };
    }

    default:
      // eslint-disable-next-line
      const exhaustiveCheck: never = action;
  }
  return state;
};
