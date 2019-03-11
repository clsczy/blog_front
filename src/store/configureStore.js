import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
middlewares.push(sagaMiddleware);
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleware.run(rootSaga);
  return store;
}
