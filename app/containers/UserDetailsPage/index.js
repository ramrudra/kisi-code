import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectCurrentUser } from './selectors';
import reducer from './reducer';
import saga from './saga';
import UserDetailsPage from './UserDetailsPage';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = createStructuredSelector({
  currentUserData: makeSelectCurrentUser()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userDetails', reducer });
const withSaga = injectSaga({ key: 'userDetails', saga });

export default compose(withReducer, withSaga, withConnect)(UserDetailsPage);
export { mapDispatchToProps };
