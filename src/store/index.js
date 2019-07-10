import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga';

import {getArticleSaga} from  '../sagas/articlesSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getArticleSaga);

export default store;