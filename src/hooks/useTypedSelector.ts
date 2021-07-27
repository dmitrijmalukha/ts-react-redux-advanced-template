import { AppStateType } from "../init/rootReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;
