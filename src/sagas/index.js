import { takeEvery } from "redux-saga/effects";

import * as actionCreators from "../actions/actions";
import {getArticleSaga} from "./articlesSaga"

export function* watchAllArticles() {
  yield takeEvery(actionCreators.fetchArticles, getArticleSaga);
}
