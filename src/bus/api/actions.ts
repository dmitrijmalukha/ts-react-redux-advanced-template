import { START_LOADING, STOP_LOADING, SET_ERROR, UNSET_ERROR } from "./types";

export type ApiActionsType = typeof apiActions;

export const apiActions = {
  startLoading: () => ({ type: START_LOADING } as const),
  stopLoading: () => ({ type: STOP_LOADING } as const),
  setError: (error: string) => ({ type: SET_ERROR, payload: error } as const),
  unsetError: (error: string) =>
    ({ type: UNSET_ERROR, payload: error } as const)
};
