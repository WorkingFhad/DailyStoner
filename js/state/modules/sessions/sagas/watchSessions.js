import { fork, all } from 'redux-saga/effects';

import watchRequest from './watchRequest';

const gen = function* () {
    yield fork(watchRequest);
};

export default gen;
