import axios from "axios";
import { UsersType, OneUserType, PostsType } from "../bus/users/types";
import { root } from "./config";

const headers = {
  "Content-type": "application/json; charset=UTF-8"
};
export type RequestParamsType = string | PostType;
export type PostType = Omit<PostsType, "id">;
export type RequestType<T> = (data?: RequestParamsType) => Promise<T>;

type APIFetchDataType = {
  user: {
    fetch: RequestType<OneUserType>;
  };
  users: {
    fetch: RequestType<UsersType>;
  };
  post: {
    postMessage: RequestType<PostsType>;
  };
};

export const api: APIFetchDataType = {
  user: {
    fetch: (id): Promise<OneUserType> => axios.get(`${root}/people/${id}`)
  },
  users: {
    fetch: (): Promise<UsersType> => axios.get(`${root}/people/`)
  },
  post: {
    postMessage: (data): Promise<PostsType> =>
      axios.post("https://jsonplaceholder.typicode.com/posts", data, {
        headers
      })
  }
};
