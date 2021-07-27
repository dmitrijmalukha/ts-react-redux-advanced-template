import { SET_ERROR, START_LOADING, STOP_LOADING, UNSET_ERROR } from "./types";
import { ApiActionsType } from "./actions";
import { InferActionsType } from "../../types/inferActionsType";

const initialState = {
  fetching: false,
  error: ""
};
type ApiStateType = typeof initialState;
export const apiReducer = (
  state = initialState,
  action: InferActionsType<ApiActionsType>
): ApiStateType => {
  switch (action.type) {
    case START_LOADING: {
      return { ...state, fetching: true };
    }
    case STOP_LOADING: {
      return { ...state, fetching: false };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    case UNSET_ERROR: {
      return { ...state, error: "" };
    }
    default: {
      // eslint-disable-next-line
      const exhaustiveCheck: never = action;
    }
  }
  return state;
};
