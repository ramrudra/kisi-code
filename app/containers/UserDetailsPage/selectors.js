/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectUser = (state) => state.get('userDetails');

const makeSelectCurrentUser = () => createSelector(
  selectUser,
  (homeState) => homeState.get('currentUser')
);

export {
  selectUser,
  makeSelectCurrentUser
};
