export const SET_USERS = "@users/SET_USERS";
export const SET_ONE_USER = "@users/SET_ONE_USER";
export const FETCH_USER = "@users/FETCH_USER";
export const FETCH_USERS = "@users/FETCH_USERS";
export const POST_POST = "@users/POST_POST";
export const SET_POST = "@users/SET_POST";

export type OneUserType = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export type UsersType = { results: OneUserType[] };

export type PostsType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
