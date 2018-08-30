import { call, put, takeLatest } from 'redux-saga/effects';
import kisiRequest from 'utils/kisiRequest';

import {
  clearGlobalNotification,
  onGetUserDetailsSuccess
} from './actions';

import { CLEAR_GLOBAL_NOTIFICATION } from './constants';
import { GET_USER_DETAILS_REQUEST } from '../UserDetailsPage/constants';

function* triggerClearNotification() {
  try {
    yield call(clearGlobalNotification);
  } catch (err) {
    console.log(err);
  }
}

function* getUserDetails() {
  try {
    const userDetails = yield call(kisiRequest.get, '/login');
    yield put(onGetUserDetailsSuccess(userDetails.user));
  } catch (err) {
    console.log(err);
    // yield put(repoLoadingError(err));
  }
}


export default function* globalData() {
  yield takeLatest(CLEAR_GLOBAL_NOTIFICATION, triggerClearNotification);
  yield takeLatest(GET_USER_DETAILS_REQUEST, getUserDetails);
}
