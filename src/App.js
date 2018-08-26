import "regenerator-runtime/runtime";
import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import  createSagaMiddleware from 'redux-saga'
import {mainReducer} from './reducers/reducer'
import Parser from './components/parser'
import rootSaga from './sagas/mainSaga'
import { FETCH_REQUEST} from './actions/actions'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer} from "react-router-redux"

export const initialState = {
  fetchingStart: false,
  dataLoaded: false,
  errors: '',
  data: null,
  pageNumber: 0,

};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    mainReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);


// const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(rootSaga);

store.dispatch({type: FETCH_REQUEST});


store.subscribe( ()=>{
    console.log(store.getState())
});

export default class App extends Component{
    render(){
       return(
           <Provider store={store}>
          <Parser/>
           </Provider>
       )
    }
}