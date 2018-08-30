import {
  GET_USER_LOCKS_REQUEST,
  GET_USER_LOCKS_SUCCESS,
  LOCK_UNLOCK_REQUEST,
  LOCK_UNLOCK_SUCCESS
} from './constants';

export function onGetUserLocksRequest() {
  return {
    type: GET_USER_LOCKS_REQUEST
  };
}

export function onGetUserLocksSuccess(data) {
  return {
    type: GET_USER_LOCKS_SUCCESS,
    data
  };
}


export function onLockUnlockRequest(id) {
  return {
    type: LOCK_UNLOCK_REQUEST,
    id
  };
}

export function onLockUnlockSuccess(data) {
  return {
    type: LOCK_UNLOCK_SUCCESS,
    data
  };
}
