/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { CLEAR_GLOBAL_NOTIFICATION, GLOBAL_NOTIFICATION } from './constants';

// The initial state of the App
const initialState = fromJS({
  notification: null
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_NOTIFICATION:
      return state
        .set('notification', action.data);

    case CLEAR_GLOBAL_NOTIFICATION:
      return state
        .set('notification', null);

    default:
      return state;
  }
}

export default appReducer;
