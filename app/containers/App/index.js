import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectNotification } from './selectors';
import reducer from './reducer';
import {
  clearGlobalNotification,
  onGetUserDetailsRequest
} from './actions';
import saga from './saga';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  onClearGlobalNotification: () => dispatch(clearGlobalNotification()),
  onGetUserDetails: () => dispatch(onGetUserDetailsRequest())
});

const mapStateToProps = createStructuredSelector({
  notification: makeSelectNotification()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

export default compose(withReducer, withSaga, withConnect)(App);
export { mapDispatchToProps };
