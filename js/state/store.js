/* @flow */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './rootSaga';
import Env from '../../env';

let store = {};

export default function configureStore(): any {
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers = composeWithDevTools({
        name: Env.instanceName,
        hostname: Env.hostname || 'localhost',
        port: 5678,
        realtime: true,
        suppressConnectErrors: false,
    });

    store = createStore(
        reducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

export function getStore() {
    return store;
}
