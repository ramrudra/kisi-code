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
