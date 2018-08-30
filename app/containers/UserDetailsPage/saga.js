import { call, put, takeLatest } from 'redux-saga/effects';
import kisiRequest from 'utils/kisiRequest';

import { onGetUserDetailsSuccess } from './actions';

import { GET_USER_DETAILS_REQUEST } from './constants';

function* getUserDetails() {
  try {
    const userDetails = yield call(kisiRequest.get, '/login');
    yield put(onGetUserDetailsSuccess(userDetails.user));
  } catch (err) {
    console.log(err);
    // yield put(repoLoadingError(err));
  }
}

export default function* userData() {
  yield takeLatest(GET_USER_DETAILS_REQUEST, getUserDetails);
}
