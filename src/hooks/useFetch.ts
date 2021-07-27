import { useEffect } from "react";
import { useTypedSelector } from "./useTypedSelector";
import { useDispatch } from "react-redux";
import { AppStateType } from "../init/rootReducer";

type StateKeys = keyof AppStateType;

export const useFetch = <T>(action: T, statePart: StateKeys = 'users') => {
  const dispatch = useDispatch();

  const state = useTypedSelector(state => ({
    state: state[statePart],
    error: state.api.error,
    fetching: state.api.fetching
  }));

  useEffect(() => {
    dispatch(action);
  }, [action, dispatch]);

  return { state };
};
