/* @flow */
import { combineReducers } from 'redux';

import session from './modules/session';
import sessions from './modules/sessions';

export default combineReducers({
    session,
    sessions,
});
