import { call, put, takeLatest } from 'redux-saga/effects';
import kisiRequest from 'utils/kisiRequest';

import { globalNotification } from 'containers/App/actions';

import {
  onGetUserLocksSuccess,
  onGetUserLocksRequest
} from './actions';

import {
  GET_USER_LOCKS_REQUEST,
  LOCK_UNLOCK_REQUEST
} from './constants';

function* getUserLocks() {
  try {
    const userLocks = yield call(kisiRequest.get, '/locks');
    yield put(onGetUserLocksSuccess(userLocks.data));
    yield put(globalNotification('success', 'User locks successfully fetched!'));
  } catch (err) {
    console.log(err);
    yield put(globalNotification('error', err.message));
  }
}

function* lockUnlock(req) {
  try {
    yield call(kisiRequest.post, `/locks/${req.id}/unlock`);
    yield put(onGetUserLocksRequest());
  } catch (err) {
    console.log(err);
    yield put(globalNotification('error', err.message));
  }
}

export default function* userData() {
  yield takeLatest(GET_USER_LOCKS_REQUEST, getUserLocks);
  yield takeLatest(LOCK_UNLOCK_REQUEST, lockUnlock);
}
