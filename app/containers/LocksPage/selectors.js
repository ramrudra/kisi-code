/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectUser = (state) => state.get('userDetails');

const makeSelectUserLocks = () => {
  return createSelector(
    selectUser,
    (userState) => userState.get('locks')
  );
};

export {
  selectUser,
  makeSelectUserLocks
};
