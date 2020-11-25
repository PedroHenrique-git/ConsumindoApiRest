import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import persistedReducers from "./modules/reduxPersist";

import reducers from "./modules/RootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducers(reducers),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
