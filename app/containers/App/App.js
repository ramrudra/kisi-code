/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserDetailsPage from 'containers/UserDetailsPage/Loadable';
import LocksPage from 'containers/LocksPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Notification from 'components/Notification';
import './style.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.onGetUserDetails();
  }

  render() {
    const {
      notification,
      onClearGlobalNotification
    } = this.props;
    return (
      <div className="app-wrapper">
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        {notification &&
        <Notification
          message={notification.message}
          variant={notification.type}
          onClose={onClearGlobalNotification}
        />
        }
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={UserDetailsPage} />
            <Route path="/locks" component={LocksPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  notification: PropTypes.object,
  onClearGlobalNotification: PropTypes.func,
  onGetUserDetails: PropTypes.func
};

export default App;
