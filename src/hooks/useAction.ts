import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { usersActions } from "../bus/users/actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(usersActions, dispatch);
};

export type useActionType = typeof useActions;
