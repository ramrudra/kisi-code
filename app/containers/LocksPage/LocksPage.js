import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import LoadingIndicator from 'components/LoadingIndicator';
import LockCard from 'components/LockCard';
import './style.scss';

class LocksPage extends React.Component {
  componentDidMount() {
    this.props.onGetUserLocks();
  }

  lockUnlock = (id, name) => this.props.onLockUnlockRequest(id, name);

  render() {
    const { locks, currentUser } = this.props;

    if (!locks) {
      return (
        <div>
          <LoadingIndicator />
          {currentUser.name &&
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            align="center"
          >
            {`Fetching ${currentUser.name}'s Locks...`}
          </Typography>
          }
        </div>
      );
    }

    return (
      <div className="locks-page">
        <Helmet>
          <title>Locks Page</title>
          <meta
            name="description"
            content="Locks Page to list current user locks"
          />
        </Helmet>
        <h1>{currentUser.name ? `${currentUser.name}'s` : ''} Locks</h1>
        <div className="locks-list-wrapper">
          {locks.map((l) => (
            <LockCard key={l.id} lock={l} lockUnlock={this.lockUnlock} />
          ))}
        </div>
      </div>
    );
  }
}

LocksPage.propTypes = {
  onGetUserLocks: PropTypes.func,
  locks: PropTypes.any,
  onLockUnlockRequest: PropTypes.func,
  currentUser: PropTypes.object
};

export default LocksPage;
