import {combineReducers, createStore } from 'redux';
import PageViewReducer from './page_view_reducer.js';

const reducers = combineReducers({
  pageView: PageViewReducer
});

module.exports = (() => createStore(reducers))();