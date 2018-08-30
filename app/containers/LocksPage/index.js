import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from 'containers/UserDetailsPage/reducer';
import { makeSelectUserLocks } from './selectors';
import { makeSelectCurrentUser } from '../UserDetailsPage/selectors';
import { onGetUserLocksRequest, onLockUnlockRequest } from './actions';
import saga from './saga';
import LocksPage from './LocksPage';

const mapDispatchToProps = (dispatch) => ({
  onGetUserLocks: () => dispatch(onGetUserLocksRequest()),
  onLockUnlockRequest: (id) => dispatch(onLockUnlockRequest(id))
});

const mapStateToProps = createStructuredSelector({
  locks: makeSelectUserLocks(),
  currentUser: makeSelectCurrentUser()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userDetails', reducer });
const withSaga = injectSaga({ key: 'userDetails', saga });

export default compose(withReducer, withSaga, withConnect)(LocksPage);
export { mapDispatchToProps };
