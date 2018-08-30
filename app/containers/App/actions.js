import {
  GLOBAL_NOTIFICATION,
  CLEAR_GLOBAL_NOTIFICATION,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS
} from './constants';

export function globalNotification(type, message) {
  return {
    type: GLOBAL_NOTIFICATION,
    data: {
      type,
      message
    },
  };
}

export function clearGlobalNotification(val) {
  return {
    type: CLEAR_GLOBAL_NOTIFICATION,
    data: val,
  };
}


export function onGetUserDetailsRequest() {
  return {
    type: GET_USER_DETAILS_REQUEST
  };
}

export function onGetUserDetailsSuccess(data) {
  return {
    type: GET_USER_DETAILS_SUCCESS,
    data
  };
}
