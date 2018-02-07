import { put, takeEvery } from 'redux-saga/effects';

// import * as apiModule from '../../api';
import * as sessionsModule from '../';

const handleRequest = function* () {
};

const gen = function* () {
    yield takeEvery(sessionsModule.REQUEST, handleRequest);
};

export default gen;
