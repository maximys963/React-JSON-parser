import {call, put, takeEvery, all} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import { FETCH_REQUEST } from '../actions/actions'


function* fetchJsonData () {
    const response = yield fetch('http://dev.frevend.com/json/users.json');
    const json = yield response.json();
    const users =  json.users;
    console.log(users)

}

 function* watchFetchData(){
    yield takeEvery(FETCH_REQUEST, fetchJsonData);
}


export default function* rootSaga(){
     yield all([
         watchFetchData()
     ])

}