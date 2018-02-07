/* @flow */
import { combineReducers } from 'redux';

import assets from './modules/assets';
import session from './modules/session';
import sessions from './modules/sessions';

export default combineReducers({
    assets,
    session,
    sessions,
});
