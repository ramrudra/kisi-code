import { fromJS } from 'immutable';

import { GET_USER_LOCKS_SUCCESS } from 'containers/LocksPage/constants';

import { GET_USER_DETAILS_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  currentUser: {
    name: null,
    email: null
  },
  locks: null
});

function userDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS_SUCCESS:
      return state.set('currentUser', action.data);

    case GET_USER_LOCKS_SUCCESS:
      return state.set('locks', action.data);

    default:
      return state;
  }
}

export default userDetailsReducer;
