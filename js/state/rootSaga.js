import { fork, all } from 'redux-saga/effects';

import watchSessions from './modules/sessions/sagas/watchSessions';

const gen = function* () {
    yield all([
        fork(watchSessions),
    ]);
};

export default gen;
