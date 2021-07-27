import { ActionCreator, AnyAction } from "redux";
import { SagaIterator } from "@redux-saga/core";
import { put, call } from "redux-saga/effects";
import { RequestParamsType, PostType } from "../api";

type FillActionType<T> = (payload: T) => { type: string; payload: T };
type ErrorActionType = (error: string) => { type: string; payload: string };
type OptionsType<T> = {
  fetcher: (params?: RequestParamsType) => Promise<T>;
  fetcherParam?: string | PostType;
  startFetching: ActionCreator<AnyAction>;
  stopFetching: ActionCreator<AnyAction>;
  fill: FillActionType<T>;
  setErrorAction: ErrorActionType;
};

export function* makeRequest<T>(options: OptionsType<T>): SagaIterator {
  
  const {
    fetcher,
    fetcherParam,
    startFetching,
    stopFetching,
    fill,
    setErrorAction
  } = options;

  try {
    yield put(startFetching());
    const result = yield call(fetcher, fetcherParam);
    console.log(result);
    yield put(fill(result.data));
    return result;
  } catch (error) {
    yield put(setErrorAction(error.message));
  } finally {
    yield put(stopFetching());
  }
}
