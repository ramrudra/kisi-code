import { call, put, takeLatest } from 'redux-saga/effects';
import kisiRequest from 'utils/kisiRequest';
import { globalNotification } from 'containers/App/actions';
import { onGetUserDetailsSuccess } from './actions';

import { GET_USER_DETAILS_REQUEST } from './constants';

function* getUserDetails() {
  try {
    const userDetails = yield call(kisiRequest.get, '/login');
    yield put(onGetUserDetailsSuccess(userDetails.user));
  } catch (err) {
    console.log(err);
    yield put(globalNotification('error', err.message));
  }
}

export default function* userData() {
  yield takeLatest(GET_USER_DETAILS_REQUEST, getUserDetails);
}
