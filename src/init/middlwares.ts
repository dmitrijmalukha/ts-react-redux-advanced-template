import { createLogger } from "redux-logger";
import { Middleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { createBrowserHistory } from "history";
import { routerMiddleware as createRouterMiddleware } from "connected-react-router";
export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action): string => (action.error ? "firebrick" : "deepskyblue"),
    prevState: (): string => "#1C5FAF",
    action: (): string => "#149945",
    nextState: (): string => "#A47104",
    error: (): string => "#ff0005"
  }
});

const devEnvironment = process.env.NODE_ENV === "development";

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middleware: Middleware[] = [sagaMiddleware, routerMiddleware];

if (devEnvironment) {
  middleware.push(logger);
}

export { history, middleware, sagaMiddleware };
