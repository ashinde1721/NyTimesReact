import {put} from 'redux-saga/effects';
import * as actionCreators from '../actions/actions';
import { API_URL, API_KEY, PERIOD } from '../config/index';
import axios from 'axios';

export function* getArticleSaga() {
    try {
          const url = `${API_URL}/${PERIOD}.json?api-key=${API_KEY}`;
          const { data: { results = [] } } = yield axios.get(url);
          yield put(actionCreators.saveArticles(results));
        } catch(err) {
          console.warn('Error in fetchArticles -> ', err);
        }

}