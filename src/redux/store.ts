import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";

const middlewares: any[] = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push();
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export { store };