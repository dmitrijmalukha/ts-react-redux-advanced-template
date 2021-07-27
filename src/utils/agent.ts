import axios, { AxiosPromise } from "axios";

const agent = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

export type RequestType<T> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: T;
};

export function request<T>({
  method,
  url,
  data
}: RequestType<T>): AxiosPromise<T> {
  return agent({
    method,
    url,
    data
  });
}
