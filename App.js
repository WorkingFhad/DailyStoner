import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './js/navigators/Navigator';
import configureStore from './js/state/store';

export default () => (
    <Provider store={configureStore()}>
        <Navigator />
    </Provider>
);
