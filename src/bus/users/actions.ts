import { PostType } from "../../api";
import {
  SET_ONE_USER,
  SET_USERS,
  OneUserType,
  UsersType,
  FETCH_USER,
  FETCH_USERS,
  POST_POST,
  PostsType,
  SET_POST
} from "./types";

export type UsersActionsType = typeof usersActions;

export const usersActions = {
  setOneUser: (user: OneUserType) =>
    ({ type: SET_ONE_USER, payload: user } as const),
  setUsers: (users: UsersType) =>
    ({ type: SET_USERS, payload: users } as const),
  fetchUser: (params: string) =>
    ({ type: FETCH_USER, payload: params } as const),
  fetchUsers: () => ({ type: FETCH_USERS } as const),
  postPost: (post: PostType) => ({ type: POST_POST, payload: post } as const),
  setPost: (post: PostsType) => ({ type: SET_POST, payload: post } as const)
};
